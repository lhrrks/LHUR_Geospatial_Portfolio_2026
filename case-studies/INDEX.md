# Case study index

All projects are also available on the website as accessible, interactive STAR case-study dialogs. The editorial dataset lives in `../js/projects.js`.

## 1. Interactive WebGIS — Leaflet × Bootstrap (documented)

- **Situation:** Spatial data needed a clearer, more navigable public-facing map interface.
- **Task:** Improve the previous GeoJSON WebGIS with more structured navigation and attribute presentation.
- **Action:** Added Bootstrap interface components, modal attribute detail, Leaflet layer controls, scale bar and road symbology.
- **Result:** A documented practicum WebGIS interface with repository and GitHub Pages links. No production usage metrics are reported.
- **Evidence:** `../assets/pgw6_home.webp`; https://github.com/lhrrks/Acara6_PGW ; https://lhrrks.github.io/Acara6_PGW/

## 2. GeoJSON WebGIS — Points, Lines & Polygons (documented)

- **Situation:** Shapefile data for roads, locations and administrative areas required an interactive web representation.
- **Task:** Convert vector data to GeoJSON and expose data attributes to web users.
- **Action:** QGIS data preparation and attribute join; Leaflet and jQuery for thematic styling, popups, tooltips and layers.
- **Result:** Three geometry types displayed according to the Acara 5 practicum report.
- **Evidence:** `../assets/pgw5_home.webp`, `../assets/pgw5_attributes.webp`; https://github.com/lhrrks/Acara5_PGW ; https://lhrrks.github.io/Acara5_PGW/

## 3. Wildfire-risk modelling concept (not a verified ML model)

- **Situation:** Multi-factor environmental risk requires explicit criteria and sensitivity tests.
- **Task:** Prototype scoring and evaluate how factor weights affect classification.
- **Action:** Built a deterministic 20-cell synthetic weighted-average implementation in JavaScript and Python.
- **Result:** Browser-based prototype and CSV-producing Python example. **No Kalimantan satellite risk map, real observations, model training or validation claims.**
- **Demo:** `../demos/risk.html`.

## 4. Station-routing concept (fictional network)

- **Situation:** Transit spaces benefit from clear shortest-path navigation.
- **Task:** Design route selection and an interpretable travel-time estimate.
- **Action:** Dijkstra's algorithm on five fictional nodes with weighted undirected edges and configurable speed.
- **Result:** Functioning shortest-path + ETA demo. **No real railway stations, KAI data or live transit ETA.**
- **Demo:** `../demos/transit.html`.

## 5. Surveying and photogrammetry practice (coursework)

- **Situation:** Accurate mapping needs field-control coordination and quality assurance.
- **Task:** Understand field-to-orthomosaic and surface-model processing.
- **Action:** GNSS measurement, SfM alignment, GCP checking, point-cloud generation, DSM/DTM production, artifact inspection.
- **Result:** Academic workflow experience. **No unpublished RMSE, model, coordinates or GCP count have been invented.**

## 6. Android GIS field-collection concept (planned)

- **Situation:** Spatial field data need structured, validated, reliable collection.
- **Task:** Propose an Android workflow for recording locations and attributes.
- **Action:** Model form → geometry validation → local storage → API request → sync status.
- **Result:** Architecture proposal only. **No released app, backend or offline-sync implementation has been claimed.**

## To replace concepts with verified work

1. Attach an original project screenshot, repository, or source dataset.
2. List specific tools and operations that were actually used.
3. Validate metrics and cite their source, units and method (e.g., horizontal RMSE from independent checkpoints).
4. Update `../js/projects.js` `status`, `result`, `caution`, and `links`.
5. Review that claims match the visible evidence after deployment.
