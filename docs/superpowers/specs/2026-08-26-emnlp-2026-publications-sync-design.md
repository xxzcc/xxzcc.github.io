# EMNLP 2026 Publications Sync Design

## Goal

Synchronize the Publications section with the already-published August 2026 News entry so that all four accepted EMNLP 2026 papers show their conference status on their publication cards.

## Evidence Boundary

The user confirmed that all four papers were accepted and supplied a screenshot of the EMNLP 2026 submission dashboard showing:

- *ArtifactsBench: Bridging the Visual-Interactive Gap in LLM Code Generation Evaluation* — Main Conference.
- *WebCompass: Evaluating Multimodal Code Agents in Web Development from Vision, Instruction, and Interaction to Implementation* — Main Conference.
- *MM-BrowseComp: A Comprehensive Benchmark for Multimodal Browsing Agents* — Main Conference.
- *JaggedBench: Measuring Reasoning Invariance via Automated Weakness Exploration* — Findings.

The existing public arXiv records were checked on 2026-08-26:

- ArtifactsBench: `https://arxiv.org/abs/2507.04952`.
- WebCompass: `https://arxiv.org/abs/2604.18224`.
- MM-BrowseComp: `https://arxiv.org/abs/2508.13186`.

The WebCompass arXiv record still uses the earlier title *WebCompass: Towards Multimodal Web Coding Evaluation for Code Language Models*. The accepted-paper dashboard uses the newer, longer title. The homepage will use the accepted-paper title while retaining the current arXiv link.

No verified public paper URL was found for JaggedBench. The supplied screenshot is sufficient evidence for its title, abbreviated author list, and Findings status, but not for an external Paper link or a personal-role claim.

## Publication Card Changes

### Existing Main Conference Cards

Update the venue badge on each existing card:

- `#paper-artifactsbench`: `arXiv 2025` → `EMNLP 2026`.
- `#paper-webcompass`: `arXiv 2026` → `EMNLP 2026`.
- `#paper-mm-browsecomp`: `arXiv 2025` → `EMNLP 2026`.

For `#paper-webcompass`, also replace the earlier arXiv title with the accepted-paper title:

> WebCompass: Evaluating Multimodal Code Agents in Web Development from Vision, Instruction, and Interaction to Implementation

Preserve the existing authors, paper notes, impact tags, roles, external links, element IDs, and publication categories for all three cards.

### New Findings Card

Add a new card to the `Multimodal, Evaluation & Surveys` publication group:

- ID: `paper-jaggedbench`.
- Category: `evaluation`.
- Title: *JaggedBench: Measuring Reasoning Invariance via Automated Weakness Exploration*.
- Venue badge: `EMNLP 2026 Findings`.
- Abbreviated authors: `Donghao Luo, Chenchen Zhang, Siheng Li, Zenan Xu, et al.` with `Chenchen Zhang` emphasized consistently with other cards.
- Note: `A benchmark for measuring reasoning invariance through automated weakness exploration.`
- Impact tags: `Reasoning evaluation`, `Robustness`, and `Benchmark`.
- No `My role` claim.
- No external `Paper` or `Code` link until a public URL is verified.

Place the card after MM-BrowseComp so that the two current EMNLP 2026 evaluation papers remain adjacent. Use the existing publication-card markup and styling; do not introduce a new component or CSS rule.

## News Link Change

In the existing `08/2026` News item, change JaggedBench from bold text to an internal link targeting `#paper-jaggedbench`. Preserve the sentence, date, ordering, and Main Conference/Findings distinction.

## Explicit Non-Goals

- Do not change the conference status or metadata of unrelated papers.
- Do not add an unverified JaggedBench paper URL, code URL, abstract claim, or personal contribution claim.
- Do not modify the News layout, Publications layout, CSS, JavaScript, filters, or theme behavior.
- Do not create a separate EMNLP section or add redundant arXiv badges alongside the venue badges.
- Do not change the current external links for ArtifactsBench, WebCompass, or MM-BrowseComp.

## Validation

- Confirm the three existing cards show `EMNLP 2026` and no longer show their former arXiv venue badges.
- Confirm the WebCompass card uses the accepted-paper title and retains its arXiv link.
- Confirm the JaggedBench card has the exact ID, Findings badge, abbreviated authors, note, and tags specified above, with no external links or role claim.
- Confirm the News link resolves to `#paper-jaggedbench` and every internal anchor on the page resolves exactly once.
- Parse `index.html` to detect duplicate IDs and missing internal targets.
- Run `git diff --check` and a local HTTP smoke test.
- Verify desktop and 390 x 844 mobile rendering, including no horizontal overflow.
- Confirm publication filters, theme switching, navigation, and the browser console remain error-free.
- After push, reload GitHub Pages with a cache-busting query and verify all four live cards and the JaggedBench News link before reporting deployment success.
