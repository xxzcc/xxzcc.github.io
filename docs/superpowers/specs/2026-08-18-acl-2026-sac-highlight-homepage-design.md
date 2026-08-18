# ACL 2026 SAC Highlight Homepage Update Design

## Goal

Make the verified ACL 2026 SAC Highlight recognition for *Reinforcement Learning on Pre-Training Data* visible on the homepage without implying that the other ACL 2026 papers received the same recognition.

## Evidence Boundary

The Google Scholar profile and citation detail page were checked on 2026-08-18.

- *Reinforcement Learning on Pre-Training Data* is labeled `ACL 2026 SAC Highlight Paper arXiv:2509.19249`.
- *CriticLean* and *ReLook* are labeled as papers in the main conference of ACL 2026, not as award or highlight papers.
- No other item in the 37-entry Scholar profile explicitly contains `SAC`, `Highlight`, or `Award` in its title or venue metadata.

The homepage must therefore attach the SAC Highlight wording only to RLPT.

## Content Changes

### News

Replace the existing combined ACL 2026 news sentence with wording that distinguishes the recognition from the other acceptances:

> ACL 2026: RLPT was selected as a SAC Highlight Paper; CriticLean, ReLook, and Rhombus were also accepted.

Each paper name keeps its existing internal anchor link.

### RLPT publication card

Update only the publication card with `id="paper-rl-pretraining-data"`:

- Add the existing `highlight` card class so the recognition receives the same established visual emphasis used by other featured work.
- Change the venue badge from `ACL 2026` to `ACL 2026 · SAC Highlight`.
- Replace the generic `ACL 2026` impact tag with `SAC Highlight Paper` and retain the `RLPT` tag.
- Add a `Scholar` link to the verified citation detail page supplied by the user.
- Retain the existing Paper and OpenReview links.

### Sitemap

Update the sitemap modification date to `2026-08-18`.

## Explicit Non-Goals

- Do not create a standalone Honors or Awards section while only one award is currently verified.
- Do not label CriticLean, ReLook, or Rhombus as Highlight or award papers.
- Do not change the broader homepage research positioning, author-role descriptions, stylesheets, or JavaScript.
- Do not add citation counts, because Scholar metrics change over time.

## Validation

- Parse `index.html` and confirm there are no duplicate IDs or missing internal anchors.
- Confirm `SAC Highlight` appears only in the RLPT news item and RLPT card.
- Confirm the RLPT card retains Paper and OpenReview links and adds the exact Scholar link.
- Confirm publication filters, navigation anchors, and theme behavior remain functional.
- Verify desktop and 390 x 844 mobile layouts, including no horizontal overflow.
- Run `git diff --check` and inspect page-specific console errors.
- After push, reload GitHub Pages with a cache-busting query and verify the live News and RLPT card before reporting deployment success.
