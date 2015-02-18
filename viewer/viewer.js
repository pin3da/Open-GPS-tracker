var proj900913 = 'EPSG:900913';
var proj4326 = 'EPSG:4326';



$(document).ready(function() {
  // Map stuff
  var map, layer;
  map = new OpenLayers.Map( 'map');
  layer = new OpenLayers.Layer.OSM( "Simple OSM Map");
  map.addLayer(layer);
  map.setCenter(new OpenLayers.LonLat(-75.694558,4.814278).transform(new OpenLayers.Projection("EPSG:4326"),
                  map.getProjectionObject()), 12);

  var tracking = new OpenLayers.Layer.Markers('Tracking');
  tracking.id  = "tracking";
  map.addLayer(tracking);

  // PUT HERE YOUR IP (socket server) !
  var socketServer = 'http://192.168.1.32:8080';
  var socket = io.connect(socketServer);

  socket.emit('client');

  socket.on('sendfromserver', function (data) {
    var size = new OpenLayers.Size(21, 25);
    var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
    var icon = new OpenLayers.Icon('gps.png', size, offset);
    var pos  =  new OpenLayers.LonLat(data.lon, data.lat).transform(proj4326, proj900913);
    var marker = new OpenLayers.Marker(pos, icon);
    marker.id = data.id;
    tracking.addMarker(marker);
  });

  socket.on('allData', function (json) {
    alert(JSON.stringify(json));
  });


});

