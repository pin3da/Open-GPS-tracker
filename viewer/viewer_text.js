$(document).ready(function() {
  var socket = io.connect(socketServer);

  socket.emit('client');

  socket.on('sendfromserver', function (data) {
    alert(JSON.stringify(data));
  });

  socket.on('allData', function (json) {
    alert(JSON.stringify(json));
  });
});

