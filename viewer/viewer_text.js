$(document).ready(function() {
  // PUT HERE YOUR IP (socket server) !
  var socketServer = 'http://192.168.1.32:8080';
  var socket = io.connect(socketServer);

  socket.emit('client');

  socket.on('sendfromserver', function (data) {
    alert(JSON.stringify(data));
  });

  socket.on('allData', function (json) {
    alert(JSON.stringify(json));
  });
});

