// SECTION 1

var chart1 = "charts/Chart1_learning_area.vg.json";
var chart2 = "charts/Chart2_learning_area_gender.vg.json";
var chart3 = "charts/Chart3_language_treemap.vg.json";

vegaEmbed("#learning_area_popularity", chart1, {
  actions: false
}).catch(console.error);

vegaEmbed("#learning_area_gender", chart2, {
  actions: false
}).catch(console.error);

vegaEmbed("#language_treemap", chart3, {
  actions: false
}).catch(console.error);


// SECTION 2

var chart4 = "charts/Chart4_learning_area_trends.vg.json";
var chart5 = "charts/Chart5_learning_area_comparison.vg.json";
var chart6 = "charts/Chart6_gender_gap_heatmap.vg.json";
var chart7 = "charts/Chart7_language_rankings.vg.json";

vegaEmbed("#learning_area_trends", chart4, {
  actions: false
}).catch(console.error);

vegaEmbed("#learning_area_comparison", chart5, {
  actions: false
}).catch(console.error);

vegaEmbed("#gender_gap_heatmap", chart6, {
  actions: false
}).catch(console.error);

vegaEmbed("#language_rankings", chart7, {
  actions: false
}).catch(console.error);


// SECTION 3
var chart8 = "charts/Chart8_queensland_popular_subjects.vg.json";
var chart9 = "charts/Chart9_subject_gender_comparison.vg.json";

vegaEmbed("#queensland_popular_subjects", chart8, {
  actions: false
}).catch(console.error);

vegaEmbed("#subject_gender_comparison", chart9, {
  actions: false
}).catch(console.error);


// SECTIOn 4

var chart10 = "charts/Chart10_school_subject_locations.vg.json";
var chart11 = "charts/Chart11_regional_enrolment_symbols.vg.json";
var chart12 = "charts/Chart12_regional_subject_share.vg.json";

vegaEmbed("#school_subject_locations", chart10, {
  actions: false
}).catch(console.error);

vegaEmbed("#regional_enrolment_symbols", chart11, {
  actions: false
}).catch(console.error);

vegaEmbed("#regional_subject_share", chart12, {
  actions: false
}).catch(console.error);