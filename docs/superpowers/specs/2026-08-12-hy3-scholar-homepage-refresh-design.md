# Hy3 and Scholar Homepage Refresh

Date: 2026-08-12  
Status: Approved design

## Objective

Refresh Chenchen Zhang's existing GitHub Pages homepage with the formal Hy3 release and a small number of relevant works found on the current Google Scholar profile. Preserve the site's existing visual system, navigation, dark mode, and publication filtering.

## Source boundaries

- Use Tencent's 2026-07-06 release announcement, the official `Tencent-Hunyuan/Hy3` repository, and the `tencent/Hy3` model card for Hy3 facts and links.
- Use the public Google Scholar profile to identify candidate publication updates, then link publications to primary paper or project pages where available.
- The owner has explicitly confirmed that the homepage may describe Chenchen Zhang as a core contributor to Hy3 and retain the existing contribution scope: post-training, RL recipes, and STEM/code reasoning optimization.
- Do not add unverified personal contribution claims for newly added papers.

## Content changes

### Hy3 formal release

Update every current-facing reference from `Hy3.0 preview` to `Hy3`, while retaining the April 2026 Preview release as a historical news event.

- Hero: list Hy3 as a core-contributor model.
- Timeline: replace the Preview node with a July 2026 Hy3 formal-release node.
- Research map and foundation-model list: use `Hy3` consistently.
- Model card: describe Hy3 as a 295B-parameter MoE model with 21B active parameters and 256K context, focused on reasoning, coding, long-context, and agentic workflows.
- Contribution statement: retain post-training, RL recipes, and STEM/code reasoning optimization.
- Links: use the Tencent release announcement, official GitHub repository, and official Hugging Face model page. Remove Preview-only and stale deployment links from the current-facing model card.
- News: add the 2026-07-06 formal release above the April 2026 Preview event. Reword the April entry so it remains historically accurate.

### Scholar-derived additions

Add no more than three selected entries so the homepage remains curated rather than becoming a full bibliography:

1. `MM-BrowseComp: A Comprehensive Benchmark for Multimodal Browsing Agents`
2. `Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces`
3. `Workflow-Gym: Towards Long-Horizon Evaluation of Computer-Use Agentic Tasks in Real-World Professional Fields`

Place each item in the existing publication group and filter taxonomy that best matches its subject. Use Scholar only for discovery; use primary arXiv or project links for the published card links.

Do not add a citation-count, h-index, or i10-index widget. Those values change frequently and would become stale on a static page.

## Implementation shape

- Keep the site static and dependency-free.
- Make content changes in `index.html`.
- Change `assets/css/main.css` only if an existing component cannot accommodate the new text; prefer no CSS changes.
- Keep `assets/js/main.js` unchanged unless testing exposes a filtering or navigation regression.
- Update `sitemap.xml` only if its existing metadata contains a stale modification date.

## Verification

- Check that no unintended current-facing `Hy3.0 preview` references remain.
- Validate internal anchor targets and external URLs.
- Serve the site locally and inspect the hero, timeline, news, and publication sections at desktop and mobile widths.
- Test publication filters, anchor navigation, and light/dark themes.
- Check the browser console for errors.
- Review the final Git diff to ensure the update is content-focused and contains no unrelated refactor.

## Deployment

Commit the implementation to the existing `main` branch and push it to `origin`. After GitHub Pages deploys, verify the live homepage and the visible Hy3 links. Do not edit the Google Scholar profile itself.
