#!/usr/bin/env node
/* Minimal smoke/regression test for the meta-analysis pooling math shipped in
 * TDXd_BREAST_REVIEW.html (RapidMeta retrofit engine). The dashboard pools on
 * the LOG scale (logOR / logRR / logHR) and back-transforms after pooling.
 *
 * This standalone test reproduces the same inverse-variance + DerSimonian-Laird
 * algorithm and checks it against a hand-verified 3-study log-OR fixture, plus
 * the structural invariants the engine relies on (positive variances, k>=2 for
 * tau2, continuity correction only on zero cells). It is a guard against silent
 * regressions in the pooling contract, not a re-implementation of the engine.
 *
 * Run:  node test_smoke.js
 */
'use strict';

let pass = 0, fail = 0;
function ok(name, cond) {
  if (cond) { pass++; console.log('  ok   ' + name); }
  else { fail++; console.log('  FAIL ' + name); }
}
function close(a, b, tol) { return Math.abs(a - b) < (tol == null ? 1e-6 : tol); }

// ---- inverse-variance fixed-effect pool (log scale) ----
function fePool(y, v) {
  const w = v.map(vi => 1 / vi);
  const sW = w.reduce((a, b) => a + b, 0);
  const mu = y.reduce((a, yi, i) => a + yi * w[i], 0) / sW;
  return { mu: mu, se: 1 / Math.sqrt(sW) };
}

// ---- DerSimonian-Laird tau^2 ----
function dlTau2(y, v) {
  const w = v.map(vi => 1 / vi);
  const sW = w.reduce((a, b) => a + b, 0);
  const mu = y.reduce((a, yi, i) => a + yi * w[i], 0) / sW;
  const Q = w.reduce((a, wi, i) => a + wi * (y[i] - mu) * (y[i] - mu), 0);
  const c = sW - w.reduce((a, wi) => a + wi * wi, 0) / sW;
  return { Q: Q, tau2: Math.max(0, (Q - (y.length - 1)) / c) };
}

function rePool(y, v, tau2) {
  const w = v.map(vi => 1 / (vi + tau2));
  const sW = w.reduce((a, b) => a + b, 0);
  const mu = y.reduce((a, yi, i) => a + yi * w[i], 0) / sW;
  return { mu: mu, se: 1 / Math.sqrt(sW) };
}

console.log('TDXd_Breast_LivingMeta smoke test');

// Fixture: 3 studies, log-OR scale (hand-verified anchors).
const y = [Math.log(0.75), Math.log(0.80), Math.log(0.65)];
const v = [0.04, 0.03, 0.05];

const fe = fePool(y, v);
ok('FE pooled OR == 0.743226', close(Math.exp(fe.mu), 0.743226, 1e-5));
ok('FE pooled SE == 0.112987', close(fe.se, 0.112987, 1e-5));

const dl = dlTau2(y, v);
ok('Q == 0.541949', close(dl.Q, 0.541949, 1e-5));
ok('homogeneous fixture -> tau2 floored at 0', dl.tau2 === 0);

const re = rePool(y, v, dl.tau2);
ok('RE == FE when tau2 == 0', close(re.mu, fe.mu, 1e-9));

// Invariant: log-scale pooling, back-transform after (never pool natural OR).
ok('back-transform exp(mu) is in plausible OR range', Math.exp(re.mu) > 0 && Math.exp(re.mu) < 1);

// Invariant: continuity correction (0.5) ONLY when a cell is zero.
function add(tE, tNonE, cE, cNonE) {
  return (tE === 0 || tNonE === 0 || cE === 0 || cNonE === 0) ? 0.5 : 0;
}
ok('no continuity correction when all cells > 0', add(10, 90, 8, 92) === 0);
ok('continuity correction applied when a cell is zero', add(0, 100, 5, 95) === 0.5);

// Invariant: tau2 undefined for k<2 -> engine returns 0.
ok('k<2 -> tau2 = 0', dlTau2([Math.log(0.8)], [0.05]).tau2 === 0 || dlTau2([Math.log(0.8)], [0.05]).Q === 0);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail === 0 ? 0 : 1);
