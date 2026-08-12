# Hy3 and Scholar Homepage Refresh Implementation Plan

## Scope

Implement the approved content-only refresh. The implementation was first kept local for owner review, then cleared for deployment when the owner asked to continue.

## Steps

1. Update current-facing Hy3 references, the model timeline, model card, official links, and the July 2026 news entry in `index.html`.
2. Preserve the April 2026 Preview news item as historical context while pointing its internal link to the current Hy3 card.
3. Add MM-BrowseComp, Orchestration Traces, and Workflow-GYM to the existing publication groups and filter taxonomy using primary-source links.
4. Update representative research links, the footer update month, and `sitemap.xml` metadata.
5. Run structural checks for duplicate IDs, broken internal anchors, HTML validity, unexpected Preview references, and whitespace errors.
6. Serve locally and inspect desktop/mobile layouts, filters, anchor navigation, themes, and console errors in the browser.
7. After owner review and approval to continue, commit the implementation, push `main`, and verify the live GitHub Pages site.
