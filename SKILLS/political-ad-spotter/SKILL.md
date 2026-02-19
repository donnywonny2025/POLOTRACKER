---
name: political-ad-spotter
description: Find, source, and display political campaign video ads (TV spots, digital ads, 15s/30s/60s). Use when the user wants to find new political campaign ads, search for specific candidate or PAC ads, build a political ad gallery, compare ad styles across parties, or research political video production. Covers YouTube search, Google Ads Transparency Center, known political ad channels, and ad archive databases. Outputs a browsable HTML gallery with embedded YouTube players.
---

# Political Ad Spotter

Find political campaign video ads from YouTube and other sources, filter by duration/party/cycle, and display them in an interactive gallery.

## Strategy Overview

Political ads appear on YouTube through three paths:
1. **Paid ads** (pre-roll, in-stream) — tracked by Google Ads Transparency Center
2. **Organic uploads** — campaigns/PACs upload spots to their own YouTube channels
3. **Aggregator channels** — news orgs and political trackers re-upload/compile ads

## Source 1: YouTube Search (Primary — Free, No API Key Required)

Use the browser to search YouTube directly. This is the fastest approach.

### Search Queries That Work

Use these proven search patterns to find 30-second political spots:

```
# By candidate + format
"[candidate name] campaign ad 2026" 30 second
"[candidate name]" "paid for by" campaign ad

# By PAC/organization
"[PAC name]" ad 2026
"Future Forward" ad 2024
"Senate Majority PAC" ad

# By party + cycle
republican campaign ad 2026 30 seconds
democrat campaign ad 2026 TV spot
political ad 2026 midterm

# By issue
abortion political ad 2026
immigration campaign commercial 2026
economy political ad 30 second

# Discovering new ads
"paid for by" political ad 2026
new campaign ad today 2026
latest political ad [state name]
```

### Duration Filtering on YouTube

YouTube search supports the "Short (< 4 minutes)" filter under Filters > Duration. Use this to find TV-length spots (15s, 30s, 60s). After search:
1. Click **Filters**
2. Under **Duration**, select **Under 4 minutes**
3. Under **Upload date**, select **This month** or **This year**
4. Under **Sort by**, select **Upload date** for newest first

### Identifying Real Campaign Ads vs News Coverage

Real campaign ads typically:
- Have the format: `[Candidate/PAC Name] | [Ad Title]` or `[Ad Title] | [Candidate Name] for [Office]`
- Include "Paid for by [committee name]" in the description
- Are 15, 30, or 60 seconds long (exactly)
- Are uploaded by verified campaign/PAC channels
- Have relatively low view counts (thousands, not millions) unless viral

News coverage about ads typically:
- Is uploaded by news channels (CNN, MSNBC, Fox, local news)
- Is 2-10 minutes long (discussion/analysis format)
- Title includes words like "analyzes", "reacts to", "new ad", "watch:"

**Prioritize the actual campaign-uploaded ad, not news coverage.**

## Source 2: Google Ads Transparency Center

URL: `https://adstransparency.google.com`

This is Google's official database of all paid ads running across Google properties including YouTube.

### How to Use

1. Navigate to `https://adstransparency.google.com`
2. In the search bar, search by **advertiser name** (e.g., "Future Forward USA", "Senate Majority PAC")
3. Filter by:
   - **Platform**: YouTube
   - **Region**: United States
   - **Political**: Toggle on "Show only political ads"
   - **Date range**: Select the cycle/period
4. Results show actual ad creatives, including video previews

### Key Political Advertiser Names to Search

Democrat:
- Future Forward USA, Senate Majority PAC, House Majority PAC, DCCC, DSCC
- Priorities USA, American Bridge 21st Century, VoteVets
- LCV Victory Fund, Planned Parenthood Action Fund, Black PAC

Republican:
- MAGA Inc, Make America Great Again, Club for Growth
- Senate Leadership Fund, Congressional Leadership Fund
- Americans for Prosperity, Restoration PAC
- Preserve America PAC, American Crossroads

Bipartisan/Issue:
- AIPAC (United Democracy Project), Fairshake PAC, No Labels

## Source 3: Known YouTube Channels That Upload Political Ads

These channels regularly upload actual campaign spots:

### Campaign/PAC Official Channels
Search YouTube for the PAC or campaign name — most have official channels where they upload their own ads.

### Political Ad Aggregators
- **Political Ad Archive** — academic/nonprofit collections
- **The Lincoln Project** — prolific anti-Trump ad producers
- **Meidas Touch** — progressive ad channel
- **Various local news** — local stations sometimes re-upload ads airing in their market

### News Analysis Channels for Discovery
- **Ad Fontes Media** — media bias analysis sometimes features ads
- **C-SPAN** — election coverage includes ad discussions

## Source 4: Meta Ad Library (Facebook/Instagram)

URL: `https://www.facebook.com/ads/library`

Many political ads run on both Meta and YouTube. Check Meta's library to discover ads, then search for the same ad on YouTube.

1. Go to Meta Ad Library
2. Set **Ad Category** to "Issues, elections or politics"
3. Search by advertiser name
4. Note the ad creative/title, then search YouTube for the same ad

## Extracting YouTube Video Info

For each ad found, capture:
- **Video ID** — from the URL: `youtube.com/watch?v=VIDEO_ID`
- **Title** — the video title
- **Channel** — who uploaded it (campaign? PAC? news?)
- **Duration** — target 15s, 30s, or 60s
- **Upload date** — when it was posted
- **Description** — look for "Paid for by" disclosures
- **Lean** — D (Democrat), R (Republican), or BI (Bipartisan)
- **Thumbnail** — `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`

## Output: HTML Gallery

Generate a single-file HTML gallery to display found ads. Use this template structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Political Ad Spotter — [Cycle] Campaign Ads</title>
    <style>
        /* Dark theme matching the research dashboard aesthetic */
        :root {
            --bg: #0a0e17;
            --surface: #111827;
            --border: rgba(255,255,255,0.08);
            --text: #e2e8f0;
            --green: #00c882;
            --red: #ef4444;
            --blue: #3b82f6;
            --amber: #f59e0b;
            --font: 'Inter', system-ui, sans-serif;
            --mono: 'JetBrains Mono', 'Fira Code', monospace;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: var(--bg); color: var(--text); font-family: var(--font); }

        .header { padding: 24px 32px; border-bottom: 1px solid var(--border); }
        .header h1 { font-size: 20px; }

        .filters { padding: 16px 32px; display: flex; gap: 8px; flex-wrap: wrap; }
        .filter-btn {
            font-family: var(--mono); font-size: 11px; padding: 6px 14px;
            border: 1px solid var(--border); border-radius: 4px;
            background: transparent; color: var(--text); cursor: pointer;
        }
        .filter-btn.active { background: var(--green); color: #000; border-color: var(--green); }
        .filter-btn.active-red { background: var(--red); color: #fff; border-color: var(--red); }
        .filter-btn.active-blue { background: var(--blue); color: #fff; border-color: var(--blue); }

        .grid {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 20px; padding: 24px 32px;
        }
        .card {
            background: var(--surface); border: 1px solid var(--border);
            border-radius: 8px; overflow: hidden; transition: border-color 0.2s;
        }
        .card:hover { border-color: var(--green); }
        .card iframe { width: 100%; aspect-ratio: 16/9; border: none; }
        .card-body { padding: 14px 16px; }
        .card-title { font-weight: 600; font-size: 14px; margin-bottom: 6px; }
        .card-meta {
            font-family: var(--mono); font-size: 10px; color: rgba(255,255,255,0.5);
            display: flex; gap: 12px; flex-wrap: wrap;
        }
        .lean-D { color: var(--blue); } .lean-R { color: var(--red); } .lean-BI { color: var(--amber); }
        .duration-badge {
            font-family: var(--mono); font-size: 9px; padding: 2px 6px;
            background: rgba(0,200,130,0.1); color: var(--green); border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎬 Political Ad Spotter</h1>
        <p style="font-family:var(--mono);font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">
            [N] ads found • Last updated [date]
        </p>
    </div>

    <div class="filters" id="filters">
        <button class="filter-btn active" data-lean="all">ALL</button>
        <button class="filter-btn" data-lean="R">REPUBLICAN</button>
        <button class="filter-btn" data-lean="D">DEMOCRAT</button>
        <button class="filter-btn" data-lean="BI">BIPARTISAN</button>
    </div>

    <div class="grid" id="grid"></div>

    <script>
        const ADS = [
            // Populate with found ads:
            // { id: "YOUTUBE_VIDEO_ID", title: "Ad Title", org: "PAC/Campaign Name",
            //   duration: "0:30", lean: "D", date: "2026-01-15",
            //   paidFor: "Paid for by Committee Name" },
        ];

        let currentLean = 'all';

        function render() {
            const filtered = currentLean === 'all' ? ADS : ADS.filter(a => a.lean === currentLean);
            document.getElementById('grid').innerHTML = filtered.map(ad => `
                <div class="card" data-lean="${ad.lean}">
                    <iframe src="https://www.youtube.com/embed/${ad.id}" allowfullscreen loading="lazy"></iframe>
                    <div class="card-body">
                        <div class="card-title">${ad.title}</div>
                        <div class="card-meta">
                            <span class="lean-${ad.lean}">${ad.lean === 'D' ? 'DEM' : ad.lean === 'R' ? 'GOP' : 'BI'}</span>
                            <span>${ad.org}</span>
                            <span class="duration-badge">${ad.duration}</span>
                            <span>${ad.date}</span>
                        </div>
                        ${ad.paidFor ? `<div style="font-family:var(--mono);font-size:9px;color:rgba(255,255,255,0.3);margin-top:6px">${ad.paidFor}</div>` : ''}
                    </div>
                </div>
            `).join('');
        }

        document.getElementById('filters').addEventListener('click', e => {
            if (!e.target.matches('.filter-btn')) return;
            currentLean = e.target.dataset.lean;
            document.querySelectorAll('.filter-btn').forEach(b => b.className = 'filter-btn');
            if (currentLean === 'R') e.target.classList.add('active-red');
            else if (currentLean === 'D') e.target.classList.add('active-blue');
            else e.target.classList.add('active');
            render();
        });

        render();
    </script>
</body>
</html>
```

## Workflow

When asked to find political ads:

1. **Clarify scope** — which party? which cycle? which state/race? specific candidates?
2. **Search YouTube** using the query patterns above (browser_subagent)
3. **Check Google Ads Transparency Center** for paid ad creatives
4. **Cross-reference Meta Ad Library** if needed for discovery
5. **Collect video IDs, titles, durations, orgs, and lean** for each ad found
6. **Filter for actual campaign spots** (15s/30s/60s, uploaded by campaign/PAC)  
7. **Generate the HTML gallery** using the template above
8. **Open the gallery** in the browser for the user to review

## Tips for Better Results

- Search for the **PAC name exactly as it appears on FEC filings** (e.g., "Future Forward USA Action" not just "Future Forward")
- Many campaigns upload ads as **unlisted** — you won't find them via search, but they may appear in Google Ads Transparency Center
- YouTube's `videoDuration=short` filter (< 4 min) is the closest you can get to filtering for TV-length spots
- Use `&sp=CAI%253D` in the YouTube search URL to sort by upload date (newest first)
- Check the **video description** for FEC disclaimers — `Paid for by [Committee Name]` confirms it's a real campaign ad
- Thumbnails: `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg` (or `hqdefault.jpg` as fallback)
