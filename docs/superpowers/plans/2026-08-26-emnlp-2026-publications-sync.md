# EMNLP 2026 Publications Sync Implementation Plan

## Scope

Implement the approved design in `docs/superpowers/specs/2026-08-26-emnlp-2026-publications-sync-design.md` using the homepage's existing publication-card markup and styles.

## Tasks

1. Change the ArtifactsBench, WebCompass, and MM-BrowseComp venue badges to `EMNLP 2026`.
2. Replace the WebCompass card title with the title shown on the accepted-paper dashboard while preserving its current arXiv link and all other card metadata.
3. Add a JaggedBench card immediately after MM-BrowseComp in the `Multimodal, Evaluation & Surveys` group, marked `EMNLP 2026 Findings`, with no unverified external link or personal-role claim.
4. Link JaggedBench in the existing August 2026 News entry to `#paper-jaggedbench`.
5. Run structural checks for duplicate IDs, missing anchors, exact venue labels, expected titles, and the absence of unverified JaggedBench links or role text.
6. Serve the site locally and verify desktop and 390 x 844 mobile layouts, navigation, publication filters, theme switching, horizontal overflow, and console errors.
7. Commit the implementation, fetch and reconcile `origin/main`, push, then verify the live homepage with a cache-busting URL.

## Expected Files

- `index.html`

## Completion Criteria

The homepage shows all four accepted papers in Publications; the three Main Conference papers display `EMNLP 2026`, JaggedBench displays `EMNLP 2026 Findings`, the News link resolves to the new JaggedBench card, existing interactions remain intact, and local `main` matches `origin/main` after deployment.
