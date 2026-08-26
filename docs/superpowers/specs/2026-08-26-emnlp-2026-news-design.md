# EMNLP 2026 News Update Design

## Goal

Add one concise August 2026 News entry announcing four accepted EMNLP 2026 papers while preserving the homepage's existing timeline layout and accurately distinguishing Main Conference papers from the Findings paper.

## Evidence Boundary

The user confirmed that all four papers were accepted and supplied a screenshot of the conference submission dashboard showing:

- *ArtifactsBench: Bridging the Visual-Interactive Gap in LLM Code Generation Evaluation* — EMNLP 2026 Main Conference.
- *WebCompass: Evaluating Multimodal Code Agents in Web Development from Vision, Instruction, and Interaction to Implementation* — EMNLP 2026 Main Conference.
- *MM-BrowseComp: A Comprehensive Benchmark for Multimodal Browsing Agents* — EMNLP 2026 Main Conference.
- *JaggedBench: Measuring Reasoning Invariance via Automated Weakness Exploration* — EMNLP 2026 Findings.

The reference homepage at `https://longo11070001.github.io/` was inspected on 2026-08-26. Its News section groups papers accepted by the same conference into one dated sentence with inline paper links. This update adopts that information pattern without copying the reference site's visual design or unrelated wording.

## Content Change

Add a new first item inside `#news .news-list`, before the existing `07/2026` Hy3 item:

> **08/2026** Four papers were accepted to EMNLP 2026: **ArtifactsBench**, **WebCompass**, and **MM-BrowseComp** to the Main Conference, and **JaggedBench** to Findings.

Implementation details:

- Use `<time datetime="2026-08">08/2026</time>`.
- Link `ArtifactsBench` to `#paper-artifactsbench`.
- Link `WebCompass` to `#paper-webcompass`.
- Link `MM-BrowseComp` to `#paper-mm-browsecomp`.
- Render `JaggedBench` as `<strong>` text without a link because the current homepage has no JaggedBench publication card and no verified public paper URL was found.
- Preserve the exact venue distinction: three papers to the Main Conference and JaggedBench to Findings.
- Update the homepage URL's `<lastmod>` in `sitemap.xml` to `2026-08-26`.

## Explicit Non-Goals

- Do not add a JaggedBench publication card in this change.
- Do not change publication venue badges or metadata for the other three papers.
- Do not modify CSS, JavaScript, the News layout, or older News entries.
- Do not use “from my group” wording because the homepage does not establish a group-management role.
- Do not present JaggedBench as a Main Conference paper or the other three papers as Findings papers.

## Validation

- Parse `index.html` and confirm there are no duplicate IDs or missing internal anchors.
- Confirm the new item is the first News item and uses `datetime="2026-08"`.
- Confirm the entry contains exactly four paper names and explicitly says `Main Conference` and `Findings`.
- Confirm the three internal links resolve to their existing publication cards and JaggedBench has no link.
- Confirm no other News item or publication card changes.
- Run `git diff --check` and validate `sitemap.xml`.
- Verify desktop and 390 x 844 mobile layouts, including no horizontal overflow.
- Confirm navigation, publication filters, theme switching, and page-specific console errors remain unaffected.
- After push, reload GitHub Pages with a cache-busting query and verify the live 08/2026 entry before reporting deployment success.
