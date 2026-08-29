# Hy4 Preview and Hunyuan Timeline Refresh Implementation Plan

## Scope

Implement the approved design in `docs/superpowers/specs/2026-08-29-hy4-preview-model-timeline-design.md` using the homepage's existing timeline, News, research-link, and publication-card patterns.

## Tasks

1. Merge the separate Hunyuan-Large and Hunyuan-T1 timeline nodes into one chronological progression node while preserving both detailed publication cards and historical News entries.
2. Add Hy4 preview as the latest and only featured timeline node with verified 770B/49B/1M specifications and official links.
3. Add a detailed Hy4 preview card before Hy3 with the user-confirmed role statement, verified tags, and official GitHub, Hugging Face, and Tencent release links.
4. Add a first-position August 2026 News item for the Hy4 preview release while keeping the EMNLP 2026 item immediately below it.
5. Add Hy4 preview to the Hero model-contribution list, Research Map, and Pretraining & Foundation Models references without removing older model names.
6. Update the homepage sitemap date to `2026-08-29`.
7. Run structural checks for unique IDs, valid anchors, exact timeline order, exact role/specification wording, and scope preservation.
8. Serve locally and verify desktop and 390 × 844 mobile layouts, timeline links, publication filters, theme switching, navigation, horizontal overflow, and console errors.
9. Commit the implementation, fetch and reconcile `origin/main`, push, then verify the live GitHub Pages deployment with a cache-busting URL.

## Expected Files

- `index.html`
- `sitemap.xml`

## Completion Criteria

The live homepage presents a five-step Hunyuan timeline ending with featured Hy4 preview, preserves separate Hunyuan-Large and Hunyuan-T1 detail cards, shows verified Hy4 content consistently across News, Hero, Research, and Publications, retains existing interactions, and leaves local `main` synchronized with `origin/main`.
