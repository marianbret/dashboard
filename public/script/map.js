var lon;
var lat;
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    projection: "EPSG:4326",
    center: ol.proj.fromLonLat([0,0]),
    zoom: 4
  })
});
function resizeMap() {
  lon = document.getElementById("longitude").value;
  lat = document.getElementById("latitude").value;
  setTimeout(function(){
    map.getView().setCenter([parseInt(lon, 10), parseInt(lat, 10)]);
    map.updateSize();
  }, 200);
}

//setInterval(resizeMap, 2000); //Ne pas raffraichir, bouger la carte serait impossible (reset au centre des coordonnées renseignées)