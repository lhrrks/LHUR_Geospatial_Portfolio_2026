# LHUR / GEO — Geospatial Portfolio

A responsive, bilingual (Bahasa Indonesia / English), **static portfolio** for Luhur Ramadani Suryana, Applied Bachelor (D-4) Geographic Information Systems, Universitas Gadjah Mada. Ready for GitHub Pages, with no build tool, database, paid service or secret key.

## Features

- 6 case studies grouped into 4 professional areas: spatial analytics, WebGIS, surveying/3D mapping, and mobile GIS.
- **STAR** (Situation–Task–Action–Result) details for all 6 case studies.
- Honest status and evidence boundaries: two documented Leaflet WebGIS projects, one surveying/SfM coursework overview, three proposed concepts (fire-risk, station routing, Android collection).
- Two functioning, clearly **synthetic** browser demos:
  - `demos/risk.html`: weighted-average multi-criteria index with adjustable normalized weights, 20 reproducible fake cells, classes and factor contributions.
  - `demos/transit.html`: Dijkstra's shortest-path algorithm on a fictional five-node graph with distances and walking ETA.
- Responsive project filtering, modal case studies, Indonesian/English toggle, reduced-motion support, screen-reader labels and keyboard-accessible navigation.
- Actual WebGIS interface screenshots extracted from the author's practicum documents (not mockups). No fabricated performance statistics or RMSE values.

## Preview locally

From this directory:

```bash
python -m http.server 8000
```

Open http://localhost:8000. The two demos also work directly in a browser after downloading the folder. An internet connection is only needed for the optional Google Fonts used by the website and for visiting linked repositories.

## Publish on GitHub Pages

1. Create a **public** repository, suggested name: `geospatial-portfolio`.
2. Upload **the contents of this folder**, keeping `index.html` at the repository root.
3. In the repository, open **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Select `main` and `/ (root)`, then save. Pages will normally appear at `https://lhrrks.github.io/geospatial-portfolio/` **once published** (this URL is not currently claimed as live).
5. Update the portfolio link in your GitHub profile bio after confirming the URL opens.

The website uses **relative paths**, so it supports both project Pages and a user Pages repository (`lhrrks.github.io`).

## Current evidence

| Case study | Evidence status | What is verified |
|:---|:---|:---|
| WebGIS — Leaflet × Bootstrap | Documented coursework | Report Acara 6, screenshot, GitHub repo, GitHub Pages URL. |
| WebGIS — GeoJSON | Documented coursework | Report Acara 5, screenshots, GitHub repo, GitHub Pages URL. |
| Kalimantan fire-risk modelling | Concept + working algorithm demo | Browser simulator and synthetic Python implementation. No real risk model / ML validation. |
| Station routing & ETA | Concept + working algorithm demo | Browser Dijkstra demo on fictional network. No real KAI or station data. |
| Topographic surveying / SfM | Coursework overview | Workflow knowledge from GNSS/SfM practicums. Real outputs and RMSE await verified supporting files. |
| Android GIS collection | App concept | Proposed architecture only; no release, field GPS or sync API claimed. |

**Important distinctions:** Weighted overlay / multi-criteria analysis is **not itself machine learning**. An SfM point cloud or orthomosaic is **not automatically an operational digital twin**. All showcase statistics, locations and inputs must be checked before presenting them as factual results.

Original sources documented in the author's practicum reports:

- [Acara 5 GeoJSON source](https://github.com/lhrrks/Acara5_PGW) · [Acara 5 Pages](https://lhrrks.github.io/Acara5_PGW/)
- [Acara 6 Bootstrap source](https://github.com/lhrrks/Acara6_PGW) · [Acara 6 Pages](https://lhrrks.github.io/Acara6_PGW/)

Images `assets/pgw5_*.webp` and `assets/pgw6_home.webp` were extracted from the associated project reports. They are demonstrations of the author's classwork, not new product screenshots.

## Updating content

- Edit `js/projects.js` to update titles, descriptions, STAR sections, evidence and links.
- Edit `js/main.js` to change general site copy, translation strings and client behavior.
- Edit `css/style.css` to customize layout and visual theme.
- Add new original or permitted project images to `assets/` and update the corresponding `image` path.
- Add published, verifiable maps, code, metrics (e.g., GCP/ICP RMSE) and deployment URLs **only after evidence exists**.

### Quick QA

```bash
node --check js/projects.js
node --check js/main.js
node --check js/risk.js
node --check js/transit.js
python scripts/weighted_overlay_demo.py --output /tmp/example_scores.csv
```

## Repository structure

```text
index.html                Portfolio home, project gallery, STAR case studies
css/style.css            Design system + responsive layout + demo screens
js/projects.js           Editable project content and evidence status
js/main.js               Rendering, filters, language, case-study dialog
js/risk.js               Synthetic weighted-overlay computation
js/transit.js            Dijkstra routing and ETA computation
demos/risk.html          Demo 1: MCDA scoring
demos/transit.html       Demo 2: graph routing
scripts/weighted_overlay_demo.py
case-studies/            Written case studies and verification checklist
assets/                 Images extracted from original practicum reports
```

## Pre-publication checklist

- [x] No fictional accuracy percentages or unsubstantiated awards
- [x] All proposed work labeled as concept, prototype or coursework
- [x] Actual WebGIS screenshots linked to source reports
- [x] Two algorithm demos run locally without external data dependencies
- [ ] Connect additional project evidence (files/screenshots and validated metrics)
- [ ] Confirm old GitHub Pages demo links are online and unchanged
- [ ] Publish this repository via GitHub Pages
- [ ] Add a verified professional email or LinkedIn URL (not guessed)

Made for transparency, reproducibility and usability—not just map aesthetics.
