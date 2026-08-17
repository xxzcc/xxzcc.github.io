# Multi-Agent RL Homepage Focus Refresh

Date: 2026-08-17  
Status: Approved design

## Objective

Make multi-agent reinforcement learning a clearly visible core research direction on Chenchen Zhang's existing homepage. Preserve the current four-card layout and reuse the already listed Orchestration Traces work rather than adding duplicate content.

## Confirmed personal claim

The owner explicitly confirmed that they are also responsible for multi-agent RL work. The homepage may therefore present multi-agent RL alongside RL post-training and agentic RL as a current research focus.

Do not infer or add narrower project-level ownership, milestones, benchmark results, or contribution claims beyond this confirmation and the existing Orchestration Traces publication card.

## Content changes

Update the following current-facing text in `index.html`:

- Metadata descriptions: add multi-agent RL to the page description, Open Graph description, and Twitter description.
- Structured data: add `Multi-Agent RL` to the Person schema's `knowsAbout` list.
- Hero summary: state that the current work includes RL post-training, agentic RL, and multi-agent RL.
- Hero research-focus line: include multi-agent RL as a first-class keyword.
- Current Focus card 02: rename it to `Agentic & Multi-Agent RL` and describe agent-team orchestration, delegation, coordination, credit assignment, and tool use.
- Research Directions introduction: include multi-agent RL.
- Research map: rename the agent node to `Agentic & Multi-Agent RL` while retaining ReLook, Orchestration Traces, and Credit Assignment as representative work.
- Detailed direction heading: rename it to `Reasoning, Agentic & Multi-Agent RL`; keep the existing paragraph and representative links, which already include multi-agent orchestration and Orchestration Traces.
- Accessibility labels that describe the updated direction should use the same terminology.
- Update `sitemap.xml` last modification date to `2026-08-17`.

## Non-goals

- Do not add a fifth Current Focus card.
- Do not add or duplicate publication cards.
- Do not change CSS, JavaScript, navigation, visual layout, or publication filters.
- Do not modify the Hy3 contribution wording or other employment/project claims.

## Verification

- Confirm all intended metadata and visible sections include multi-agent RL consistently.
- Confirm the Orchestration Traces publication card remains unique.
- Run `git diff --check` and structural checks for duplicate IDs and missing internal anchors.
- Serve the site locally and inspect desktop and 390x844 mobile layouts.
- Test anchor navigation, light/dark themes, and the unchanged publication filters.
- Confirm there are no page-originated browser console errors.

## Deployment

Commit this refresh on `main`, push it together with the two previously committed Hy3/Scholar refresh commits, then verify the live GitHub Pages homepage. Do not claim deployment until the live page visibly contains the new multi-agent RL wording.
