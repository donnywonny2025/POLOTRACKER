# Example Directive — Web Research

> This is a starter directive to demonstrate the format. Replace or expand as needed.

## Goal
Research a given topic and produce a structured summary.

## Inputs
- `topic` — The subject to research (provided by user)
- `depth` — "quick" (1-2 sources) or "deep" (5+ sources)

## Execution Steps
1. Use Firecrawl or browser tools to gather information
2. Run `execution/summarize.py` (when created) to organize findings
3. Output a structured Markdown report

## Output
- Markdown summary saved to `.tmp/research_<topic>.md`
- Final deliverable shared with user

## Edge Cases
- If Firecrawl API is unavailable, fall back to browser-based scraping
- If topic is ambiguous, ask user for clarification before proceeding

## Learnings
<!-- The agent appends lessons here as it encounters issues -->
