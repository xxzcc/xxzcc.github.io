# Multi-Agent RL Homepage Focus Implementation Plan

## Scope

Implement the approved wording-only refresh, validate it locally, and deploy it with the pending Hy3/Scholar commits.

## Steps

1. Update the HTML metadata fields `description`, `og:description`, and `twitter:description` to include multi-agent RL.
2. Add `Multi-Agent RL` to the JSON-LD `knowsAbout` list.
3. Update the hero summary, hero research-focus line, Current Focus card 02, Research Directions introduction, research-map agent node, detailed direction heading, and the representative-work accessibility label.
4. Keep the existing four-card layout and the single Orchestration Traces publication card; do not edit CSS or JavaScript.
5. Update `sitemap.xml` last modification date to `2026-08-17`.
6. Run whitespace, content-consistency, duplicate-ID, and internal-anchor checks.
7. Render desktop and 390x844 mobile views; verify themes, anchors, filters, overflow, and page-originated console errors.
8. Commit the refresh, push `main`, and verify the live GitHub Pages content before reporting deployment success.
