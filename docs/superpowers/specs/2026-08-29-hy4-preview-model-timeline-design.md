# Hy4 Preview and Hunyuan Timeline Refresh Design

## Goal

Refresh the homepage's Hunyuan model story by:

1. Combining Hunyuan-Large and Hunyuan-T1 into one timeline step that explains the progression from pre-training and fast thinking to slow-thinking reasoning.
2. Adding the newly released Hy4 preview across the homepage as the latest Hunyuan model contribution.
3. Preserving the existing standalone Hunyuan-Large and Hunyuan-T1 detail cards and historical News links.

## Evidence Boundary

Hy4 preview was released and open-sourced on 2026-08-28. The content in this update is limited to claims supported by the official Tencent release, the official `Tencent-Hunyuan/Hy4-preview` repository, and the user-confirmed personal contribution statement.

Official product facts:

- Architecture: Mixture-of-Experts.
- Backbone parameters: 770B total and 49B activated per token.
- Context length: 1M tokens.
- License: Apache 2.0.
- Positioning: an open-source flagship model for real-world productivity tasks, including coding, office work and analysis, game development, scientific research, and agentic workflows.
- Performance wording: Tencent describes the model as reaching the open-source frontier and showing its largest measured generation-over-generation capability gain.

Official links:

- Release: `https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/`
- GitHub: `https://github.com/Tencent-Hunyuan/Hy4-preview`
- Hugging Face: `https://huggingface.co/tencent/Hy4-preview`

User-confirmed role wording:

> Core contributor to post-training, reinforcement learning, and agentic capability optimization.

Do not infer a Hy4 pre-training contribution or add more specific personal responsibility claims without further confirmation.

## Timeline Design

Keep the existing five-column desktop timeline. Replace the separate Hunyuan-Large and Hunyuan-T1 nodes with one combined node, then append Hy4 preview as the newest node. This preserves five timeline items and requires no CSS layout change.

### Combined Hunyuan-Large and Hunyuan-T1 Node

- Date: `11/2024–03/2025`.
- Title: `Hunyuan-Large → Hunyuan-T1`.
- Description: `Hunyuan-Large established the long-context MoE pre-training and fast-thinking foundation; Hunyuan-T1 extended it with slow-thinking reasoning and code-reasoning post-training.`
- Internal links:
  - `Large details` → `#model-hunyuan-large`.
  - `T1 details` → `#model-hunyuan-t1`.
- External links:
  - `Large report` → `https://arxiv.org/abs/2411.02265`.
  - `T1 tech page` → `https://tencent.github.io/llm.hunyuan.T1/README_EN.html`.

The combined node is a timeline summary only. It must not remove or merge the two detailed publication cards.

### Hy4 Preview Node

- Date: `08/2026`.
- Title: `Hy4 preview`.
- Style: use the existing `featured` timeline treatment; remove `featured` from Hy3 so only the newest release is emphasized.
- Description: `Open-source 770B MoE flagship with 49B active parameters, 1M context, and frontier-level performance across coding, productivity, scientific research, and agentic tasks.`
- Links:
  - `Details` → `#model-hy4-preview`.
  - `GitHub` → the official GitHub repository.
  - `HF` → the official Hugging Face model.
  - `Release` → the official Tencent release.

## Detailed Hy4 Preview Card

Add the newest model card before the existing Hy3 card in `Models & Technical Reports`:

- ID: `model-hy4-preview`.
- Classes: `publication-item highlight`.
- Categories: `models code rl`.
- Title: `Hy4 preview`.
- Badge: `Open Model 2026`.
- Author/team: `Tencent Hy Team`, matching the official repository.
- Description: `Open-source 770B-parameter MoE flagship with 49B active parameters and 1M context, delivering frontier-level performance across coding, productivity, scientific research, and complex agentic tasks.`
- Role: `Core contributor to post-training, reinforcement learning, and agentic capability optimization.`
- Tags:
  - `770B MoE`
  - `49B active`
  - `1M context`
  - `Agentic`
  - `Apache 2.0`
- Links: `GitHub`, `HF`, and `Release`, using the official URLs above.

Do not add unverified benchmark numbers, a pre-training role, or claims of being a lead/first author.

## Homepage Synchronization

Update the following places so the model family story remains consistent:

1. Hero summary: prepend `Hy4 preview` to the current list of model contributions.
2. Research map's Hunyuan Models line: prepend `Hy4 preview`.
3. `Pretraining & Foundation Models` description and representative links: prepend Hy4 preview and link it to `#model-hy4-preview`.
4. News: add a new first `08/2026` entry announcing that Hy4 preview was released and open-sourced, using the verified 770B/49B/1M facts and linking the model name to `#model-hy4-preview`.
5. Preserve the existing EMNLP 2026 News item immediately after the new Hy4 item.
6. Update `sitemap.xml` homepage `<lastmod>` to `2026-08-29`.

Do not remove Hunyuan-Large or Hunyuan-T1 from the hero/research contribution lists solely because their timeline nodes are combined; they remain distinct model contributions.

## Explicit Non-Goals

- Do not merge or delete the standalone Hunyuan-Large and Hunyuan-T1 detail cards.
- Do not remove or rewrite their historical News entries.
- Do not change unrelated model, paper, or research cards.
- Do not add new CSS or JavaScript unless testing reveals a regression caused by the approved content change.
- Do not use unofficial parameter counts from aggregator metadata; use the official 770B backbone and 49B activated specification.
- Do not claim Hy4 pre-training ownership or add role details beyond the user's confirmed wording.
- Do not copy the full benchmark appendix or add volatile third-party rankings.

## Validation

- Parse `index.html` and confirm all IDs are unique and every internal anchor resolves.
- Confirm the model timeline contains exactly five items in chronological order:
  1. Hunyuan-Large → Hunyuan-T1
  2. Hunyuan-TurboS & A13B
  3. HY2.0
  4. Hy3
  5. Hy4 preview
- Confirm only Hy4 preview has the `featured` timeline class.
- Confirm the combined timeline node links to both preserved detail cards.
- Confirm the Hy4 card contains the exact verified specifications, role wording, tags, and official links.
- Confirm the Hy4 News entry is first and the EMNLP 2026 item remains immediately below it.
- Confirm Hero and Research sections include Hy4 preview without removing older model names.
- Run `git diff --check` and validate `sitemap.xml`.
- Serve the site locally and verify desktop and 390 × 844 mobile rendering, including no horizontal overflow.
- Confirm timeline links, publication filters, theme switching, navigation, and the browser console remain functional.
- After push, load GitHub Pages with a cache-busting query and verify the live timeline, Hy4 card, News item, and homepage references before reporting deployment success.
