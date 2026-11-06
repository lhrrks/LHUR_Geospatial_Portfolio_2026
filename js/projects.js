/* Editorial data. Statuses distinguish documented work, coursework, and proposed concepts. */
window.PORTFOLIO_PROJECTS = [
{
 id:'webgis-bootstrap',category:'web',number:'01',status:'verified',image:'assets/pgw6_home.webp',year:'2026',
 title:{id:'WebGIS Interaktif — Leaflet × Bootstrap',en:'Interactive WebGIS — Leaflet × Bootstrap'},
 type:'WEBGIS / INTERFACE ENGINEERING',
 short:{id:'Pengembangan antarmuka peta berbasis GeoJSON dengan navigasi Bootstrap, modal informasi, legenda, simbolisasi, dan kontrol layer.',en:'Built a GeoJSON web-map interface with Bootstrap navigation, attribute modals, legends, symbology and layer controls.'},
 tags:['Leaflet.js','Bootstrap','JavaScript','GeoJSON'],
 situation:{id:'Proyek praktikum membutuhkan peta web yang menyajikan jalan, toponimi, dan informasi penduduk secara lebih mudah dibaca dan ditelusuri.',en:'A geospatial programming assignment required a web map that makes road, place-name and population attributes more accessible.'},
 task:{id:'Meningkatkan antarmuka WebGIS yang telah dibuat pada tahap GeoJSON menjadi sistem dengan informasi atribut dan navigasi yang lebih terstruktur.',en:'Extend the original GeoJSON web map with a clearer interface, richer attribute presentation and more structured navigation.'},
 action:{id:'Menggunakan Leaflet untuk peta, GeoJSON untuk layer, Bootstrap untuk tata letak dan modal, serta menambahkan legenda, skala, ikon, kontrol layer, dan simbologi jalan berdasarkan atribut.',en:'Used Leaflet for mapping, GeoJSON layers, Bootstrap layouts and modals, plus a legend, scale bar, icons, layer control and road symbology driven by attributes.'},
 result:{id:'Laporan praktikum mendokumentasikan tampilan WebGIS yang berjalan beserta repositori GitHub dan tautan GitHub Pages. Tidak ada pengujian performa atau jumlah pengguna yang diklaim.',en:'The practicum report documents a working WebGIS view, a GitHub repository and a GitHub Pages URL. No production performance or user metrics are claimed.'},
 caution:{id:'Bukti yang tersedia adalah laporan dan cuplikan antarmuka praktikum; ketersediaan situs secara langsung belum diuji dari paket portofolio ini.',en:'Available evidence consists of a practicum report and interface screenshots; current uptime of the original site has not been tested from this portfolio package.'},
 links:[{label:'GitHub source',href:'https://github.com/lhrrks/Acara6_PGW'},{label:'GitHub Pages',href:'https://lhrrks.github.io/Acara6_PGW/'}]
},
{
 id:'webgis-geojson',category:'web',number:'02',status:'verified',image:'assets/pgw5_attributes.webp',year:'2026',
 title:{id:'WebGIS GeoJSON — Data Titik, Garis, Area',en:'GeoJSON WebGIS — Points, Lines & Polygons'},
 type:'WEBGIS / GEOSPATIAL DATA',
 short:{id:'Konversi SHP ke GeoJSON melalui QGIS dan penyajian layer spasial beserta popup, tooltip, simbologi, dan kontrol layer.',en:'Converted SHP data to GeoJSON with QGIS and presented spatial layers with popups, tooltips, symbology and layer controls.'},
 tags:['QGIS','Leaflet.js','jQuery','GeoJSON'],
 situation:{id:'Data spasial jalan, toponimi, batas kecamatan, dan jumlah penduduk perlu dikonversi menjadi tampilan web yang interaktif.',en:'Road, place-name, district-boundary and population data needed to be transformed into an interactive web map.'},
 task:{id:'Mengonversi SHP menjadi GeoJSON lalu menyajikan geometri titik, garis, serta poligon beserta atribut yang dapat diakses pengguna.',en:'Convert SHP to GeoJSON and deliver accessible attributes for point, line and polygon geometries.'},
 action:{id:'Mengolah data dalam QGIS, menggabungkan tabel jumlah penduduk, mengekspor GeoJSON, lalu menggunakan Leaflet dan jQuery untuk menampilkan marker, jalan, poligon tematik, popup, tooltip, dan kontrol layer.',en:'Processed data with QGIS, joined population attributes, exported GeoJSON and used Leaflet and jQuery to render markers, roads, thematic polygons, popups, tooltips and layer controls.'},
 result:{id:'Tiga jenis geometri berhasil dimuat pada peta web menurut kesimpulan laporan. Bukti antarmuka, repositori, dan tautan GitHub Pages tercantum di lampiran.',en:'The report confirms three geometry types were displayed in the web map, with interface screenshots, source repository and a GitHub Pages link in the appendix.'},
 caution:{id:'Data jumlah penduduk pada praktikum merupakan atribut demonstrasi; jangan menginterpretasikan cuplikan sebagai informasi kependudukan terkini.',en:'Population attributes belong to the practicum dataset; the screenshot should not be interpreted as current demographic information.'},
 links:[{label:'GitHub source',href:'https://github.com/lhrrks/Acara5_PGW'},{label:'GitHub Pages',href:'https://lhrrks.github.io/Acara5_PGW/'}]
},
{
 id:'fire-risk',category:'analytics',number:'03',status:'concept',image:null,art:'risk',year:'2026',
 title:{id:'Pemodelan Risiko Karhutla — Kalimantan',en:'Wildfire-Risk Modelling — Kalimantan'},
 type:'SPATIAL ANALYTICS / CONCEPT',
 short:{id:'Rancangan analisis multikriteria dan otomasi risiko karhutla; dilengkapi demonstrasi skoring berbobot menggunakan data sintetis.',en:'A multi-criteria risk-modelling and automation concept, accompanied by an interactive weighted-scoring demonstration with synthetic data.'},
 tags:['Python','Raster analysis','GEE','MCDA'],
 situation:{id:'Mitigasi kebakaran hutan dan lahan memerlukan penggabungan beberapa faktor lingkungan serta penjelasan yang transparan tentang kontribusi tiap faktor.',en:'Wildfire mitigation requires integrating multiple environmental factors and transparently explaining their relative contributions.'},
 task:{id:'Menyusun rancangan alur kerja untuk menormalisasi faktor risiko, memberi bobot, menggabungkan raster, dan menyajikan hasil dalam antarmuka interaktif.',en:'Design a workflow for normalizing risk factors, assigning weights, combining raster layers and presenting the outcome in an interactive interface.'},
 action:{id:'Mendefinisikan variabel contoh (kekeringan, tutupan lahan, kedekatan dan kemiringan), menyusun rumus weighted overlay, serta membuat demonstrasi JavaScript dan skrip Python berbasis data sintetis. Google Earth Engine dicantumkan sebagai arah implementasi, bukan hasil terverifikasi.',en:'Specified example factors (dryness, land cover, proximity and slope), designed a weighted-overlay equation and created JavaScript/Python demos using synthetic data. Google Earth Engine is an intended implementation path, not a verified deployment.'},
 result:{id:'Prototipe skoring dan sensitivitas bobot dapat dijalankan pada situs portofolio. Belum ada peta risiko Kalimantan berbasis observasi, model machine learning terlatih, atau metrik validasi.',en:'The portfolio includes a working scoring and weight-sensitivity prototype. There is no claimed observation-based Kalimantan risk map, trained machine-learning model or validation metric.'},
 caution:{id:'Weighted overlay adalah analisis multikriteria, bukan otomatis GeoAI atau model prediksi machine learning. Demo tidak menggunakan observasi dan tidak layak untuk keputusan mitigasi.',en:'Weighted overlay is multi-criteria analysis, not automatically GeoAI or a machine-learning prediction. This simulation uses no observations and is unsuitable for mitigation decisions.'},
 links:[{label:'Try algorithm demo',href:'demos/risk.html',demo:true},{label:'Read Python example',href:'scripts/weighted_overlay_demo.py'}]
},
{
 id:'transit',category:'web',number:'04',status:'concept',image:null,art:'routing',year:'2026',
 title:{id:'Stasiun & Routing ETA — Konsep Transit',en:'Station Routing & ETA — Transit Concept'},
 type:'LOCATION INTELLIGENCE / CONCEPT',
 short:{id:'Konsep navigasi stasiun dengan algoritma Dijkstra dan estimasi waktu tempuh pada jaringan simulasi, bukan informasi operasional KAI.',en:'A station-navigation concept with Dijkstra shortest-path computation and simulated travel time on a fictional network—not operational KAI information.'},
 tags:['JavaScript','Graph routing','ETA','UX'],
 situation:{id:'Pengguna fasilitas transit membutuhkan jalur yang mudah dipahami antara akses masuk, peron, dan titik perpindahan moda.',en:'Transit users need understandable paths between entrances, platforms and transfer points.'},
 task:{id:'Merancang prototipe pencarian rute dan estimasi waktu tempuh yang responsif terhadap perubahan titik asal, tujuan, dan kecepatan perjalanan.',en:'Prototype route finding and travel-time estimation that respond to changes in origin, destination and travel speed.'},
 action:{id:'Membuat jaringan graf fiktif, menentukan panjang setiap ruas, menerapkan algoritma Dijkstra, dan mengonversi panjang rute menjadi ETA dengan asumsi kecepatan berjalan.',en:'Created a fictional graph, assigned segment lengths, implemented Dijkstra’s algorithm and translated route distances into walking-time estimates.'},
 result:{id:'Demo rute dan ETA dapat dicoba. Belum terhubung ke data jaringan stasiun, jadwal kereta, API waktu nyata, atau hasil kompetisi yang terverifikasi.',en:'A functioning route and ETA demonstration is available. No real station network, train timetable, live API or verified competition outcome is connected.'},
 caution:{id:'Rute, panjang ruas, simpul, dan ETA merupakan data simulasi. Tidak boleh dipakai untuk navigasi aktual atau perkiraan keberangkatan kereta.',en:'All nodes, segment lengths, routes and ETAs are simulated. They must not be used for real navigation or train departure planning.'},
 links:[{label:'Try routing demo',href:'demos/transit.html',demo:true}]
},
{
 id:'mapping-3d',category:'survey',number:'05',status:'coursework',image:null,art:'terrain',year:'2026',
 title:{id:'Survei Topografi & Fotogrametri',en:'Topographic Survey & Photogrammetry'},
 type:'SURVEY / 3D MAPPING',
 short:{id:'Alur praktikum survei GNSS, pemrosesan SfM, serta pembentukan point cloud, DSM, DTM, dan ortomosaik.',en:'Coursework workflows in GNSS surveying and SfM processing, including point clouds, DSM, DTM and orthomosaics.'},
 tags:['GNSS','SfM','DSM / DTM','ArcGIS Pro'],
 situation:{id:'Pemetaan topografi dan permukaan membutuhkan koordinat titik kontrol serta pemrosesan data yang menjaga konsistensi geometrik.',en:'Topographic and surface mapping require control-point coordinates and consistent geometry during processing.'},
 task:{id:'Memahami rangkaian akuisisi, penyiapan titik kontrol, pemrosesan fotogrametri dan penilaian kualitas keluaran spasial.',en:'Understand acquisition, control-point setup, photogrammetric processing and evaluation of spatial outputs.'},
 action:{id:'Mempelajari pengukuran GNSS, pemrosesan Structure from Motion, pemeriksaan tie point dan GCP, pembentukan dense point cloud, DSM, DTM serta ortomosaik, dan identifikasi artefak.',en:'Worked through GNSS surveying and Structure-from-Motion steps: tie point and GCP checks, dense point cloud, DSM, DTM, orthomosaic and artifact inspection.'},
 result:{id:'Ruang lingkup praktikum terdokumentasi dalam riwayat kerja akademik. Belum disertakan orthomosaic asli, model 3D, data ICP, maupun nilai RMSE yang dapat diverifikasi di portofolio ini.',en:'The coursework scope is documented in academic work. Original orthomosaics, 3D models, ICP measurements and verifiable RMSE values have not yet been added to this portfolio.'},
 caution:{id:'Hasil SfM tidak otomatis merupakan digital twin yang tersinkronisasi. Metrik akurasi dan model nyata hanya akan ditambahkan bersama data serta metode validasinya.',en:'An SfM output is not automatically a synchronized digital twin. Accuracy metrics and real models should only be added with supporting data and validation methods.'},
 links:[]
},
{
 id:'android',category:'mobile',number:'06',status:'concept',image:null,art:'mobile',year:'2026',
 title:{id:'Aplikasi Pengumpulan Data GIS — Konsep Android',en:'Android GIS Field Collection — Concept'},
 type:'MOBILE GIS / APP DESIGN',
 short:{id:'Rancangan aplikasi formulir lapangan yang memadukan koordinat, atribut, validasi, dan sinkronisasi ke server.',en:'An Android field-form concept combining location capture, attributes, validation and server synchronization.'},
 tags:['Android','Kotlin','GPS','Data sync'],
 situation:{id:'Pendataan lapangan manual rentan pada ketidakkonsistenan atribut, duplikasi, dan kendala saat koneksi terbatas.',en:'Manual field collection can cause inconsistent attributes, duplicates and connectivity-related problems.'},
 task:{id:'Menyusun rancangan aplikasi seluler untuk mencatat objek, lokasi dan atribut, serta menyiapkan alur sinkronisasi yang bisa diaudit.',en:'Design a mobile application that records features, positions and attributes with an auditable synchronization workflow.'},
 action:{id:'Menyusun konsep antarmuka dan alur data: input formulir, validasi geometri/atribut, penyimpanan lokal, pengiriman ke API, dan pemeriksaan status sinkronisasi. Pengalaman Android Studio menjadi dasar rancangan.',en:'Designed an interface and data flow covering forms, geometry/attribute validation, local storage, API submission and synchronization states, building on Android Studio coursework.'},
 result:{id:'Skema arsitektur dan daftar kebutuhan teknis siap dikembangkan. Belum ada APK, repositori khusus, integrasi GPS lapangan, atau backend produksi yang terverifikasi.',en:'An architecture outline and technical requirements are ready. No verified APK, dedicated repository, field GPS integration or production backend is claimed.'},
 caution:{id:'Ini adalah konsep pengembangan, bukan aplikasi pengumpulan data yang telah dirilis. Fitur penyimpanan offline dan sinkronisasi belum diimplementasikan di portofolio.',en:'This is an application concept, not a released field-collection app. Offline storage and sync have not been implemented in the portfolio.'},
 links:[]
}
];
