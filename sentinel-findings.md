# sentinel-findings.md

*Written by Sentinel — WARN-tier findings.*

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:36.593667+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:36.593667+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:36.593667+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:36.593667+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:36.593667+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:16158`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:36.593667+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:22993`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:36.593667+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `TDXd_BREAST_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:36.735972+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:7767`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:7767`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8130`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8130`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8403`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8406`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9687`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9690`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9693`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9696`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9708`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9894`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10032`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10059`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10074`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10077`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10080`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10083`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10089`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10113`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10545`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10548`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10551`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:43900`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:43944`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44006`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44356`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44356`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:39.355997+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:49.569770+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:49.569770+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:49.569770+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:49.569770+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:49.569770+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:16158`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:49.569770+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:22993`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:49.569770+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `TDXd_BREAST_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:17:49.727793+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:7767`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:7767`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8130`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8130`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8403`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8406`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9687`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9690`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9693`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9696`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9708`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9894`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10032`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10059`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10074`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10077`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10080`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10083`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10089`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10113`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10545`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10548`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10551`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:43900`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:43944`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44006`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44356`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44356`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:17:51.991590+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:02.115292+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:02.115292+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:02.115292+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:02.115292+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:02.115292+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:16158`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:02.115292+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:22993`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:02.115292+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `TDXd_BREAST_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:02.289604+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:7767`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:7767`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8130`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8130`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8403`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8406`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9687`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9690`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9693`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9696`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9708`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9894`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10032`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10059`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10074`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10077`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10080`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10083`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10089`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10113`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10545`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10548`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10551`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:43900`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:43944`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44006`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44356`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44356`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:04.819149+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:15.649515+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:15.649515+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:15.649515+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:15.649515+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:15.649515+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:16158`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:15.649515+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:22993`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:15.649515+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `TDXd_BREAST_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:18:15.855599+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:7767`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:7767`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8130`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8130`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8403`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8406`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9687`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9690`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9693`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9696`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9708`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9894`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10032`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10059`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10074`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10077`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10080`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10083`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10089`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10113`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10545`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10548`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10551`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:43900`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:43944`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44006`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44356`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44356`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:18:18.855006+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:2364`
- **Detail:** NCT12345678 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT12345678 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:20:49.663893+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5080`
- **Detail:** NCT01035255 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01035255 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:20:49.663893+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5083`
- **Detail:** NCT01920711 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01920711 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:20:49.663893+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5086`
- **Detail:** NCT02924727 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT02924727 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:20:49.663893+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:5089`
- **Detail:** NCT03988634 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT03988634 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:20:49.663893+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:16158`
- **Detail:** NCT01206062 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT01206062 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:20:49.663893+00:00

## [WARN] P1-fabrication-orphan-trial
- **Location:** `TDXd_BREAST_REVIEW.html:22993`
- **Detail:** NCT05901831 mentioned in body but not in realData — orphan trial reference: either the trial was dropped during extraction (update prose) or the citation is fabricated
- **Fix hint:** verify NCT05901831 against ClinicalTrials.gov; either add it to realData with full extracted fields, or remove the prose citation if it was inherited from a different paper
- **Source:** F:\e156\docs\assurance-standard.md#data-provenance-match  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:20:49.663893+00:00

## [WARN] P1-fabrication-round-number-cluster
- **Location:** `TDXd_BREAST_REVIEW.html:1`
- **Detail:** 4 suspicious round-number categories firing (cohort_round, p_round, or_perfect_null, or_double_round) — possible fabrication tell
- **Fix hint:** verify the quoted values against the source
- **Source:** F:\e156\docs\assurance-standard.md#data-checking  (BadScientist family, arXiv 2510.18003)
- **When:** 2026-06-13T13:20:49.812149+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:7767`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:7767`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8130`
- **Detail:** `parseInt(t.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8130`
- **Detail:** `parseInt(t.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8403`
- **Detail:** `parseInt(t?.data?.tN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:8406`
- **Detail:** `parseInt(t?.data?.cN ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9687`
- **Detail:** `parseInt(diff?.originalCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9690`
- **Detail:** `parseInt(diff?.currentCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9693`
- **Detail:** `parseInt(diff?.addedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9696`
- **Detail:** `parseInt(diff?.removedCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9708`
- **Detail:** `parseFloat(diff?.bestSimilarity ??    ) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:9894`
- **Detail:** `parseInt(rawTrial?.versionCount ?? changes.length, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10032`
- **Detail:** `parseInt(rawTrial?.current?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10059`
- **Detail:** `parseInt(rawTrial?.original?.enrollmentInfo?.count, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10074`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.outcomes, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10077`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.primaryOutcomes, 10) ` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10080`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.secondaryOutcomes, 10` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10083`
- **Detail:** `parseInt(rawTrial?.lastUpdateVersions?.enrollmentInfo, 10) |` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10089`
- **Detail:** `parseInt(rawTrial?.outcomesUpdateCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10113`
- **Detail:** `parseInt(rawPack?.summary?.errorCount, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10545`
- **Detail:** `parseInt(entry?.ctgov ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10548`
- **Detail:** `parseInt(entry?.pubmed ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:10551`
- **Detail:** `parseInt(entry?.openalex ?? 0, 10) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:43900`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:43944`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44006`
- **Detail:** `parseInt(r.k) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44338`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44356`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `TDXd_BREAST_REVIEW.html:44356`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(t.data.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:35`
- **Detail:** `Number(rd.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.tE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00

## [WARN] P2-numeric-parse-or-null
- **Location:** `index.html:53`
- **Detail:** `Number(d.cE) || 0` drops 0/0.0 silently — parsed zero is falsy and falls through to the right-hand fallback
- **Fix hint:** use `Number.isFinite(parsed) ? parsed : null` after a single parseFloat/parseInt/Number call
- **Source:** lessons.md#javascript--html  (parseFloat(x) || null drops 0.0)
- **When:** 2026-06-13T13:20:51.880464+00:00
