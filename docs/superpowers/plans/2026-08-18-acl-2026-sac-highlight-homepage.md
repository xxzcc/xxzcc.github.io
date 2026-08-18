# ACL 2026 SAC Highlight Homepage Implementation Plan

## Scope

Implement the approved design in `docs/superpowers/specs/2026-08-18-acl-2026-sac-highlight-homepage-design.md` without changing CSS, JavaScript, or unrelated homepage content.

## Tasks

1. Update the ACL 2026 item in the `#news` timeline so RLPT alone is identified as a SAC Highlight Paper and the other three papers remain acceptance-only.
2. Update `#paper-rl-pretraining-data`:
   - add the existing `highlight` class;
   - change the venue badge to `ACL 2026 · SAC Highlight`;
   - change the first impact tag to `SAC Highlight Paper`;
   - retain the `RLPT` tag, Paper link, and OpenReview link;
   - add the exact verified Scholar citation-detail link.
3. Update the homepage `<lastmod>` in `sitemap.xml` to `2026-08-18`.
4. Run structural checks for duplicate IDs, missing internal anchors, exact SAC Highlight occurrences, and link preservation.
5. Serve the site locally and verify desktop and 390 x 844 mobile layouts, filters, theme, navigation, horizontal overflow, and console errors.
6. Commit the implementation, fetch and reconcile the remote branch, push `main`, then verify the live page with a cache-busting URL.

## Expected Files

- `index.html`
- `sitemap.xml`

## Completion Criteria

The live homepage displays the verified SAC Highlight designation only for RLPT in News and the RLPT card, all existing interactions continue to work, and local `main` matches `origin/main` after deployment.
