var wsPort = process.env.WS_PORT || 8080,
    io     = require('socket.io').listen(wsPort);
console.log("Listening for GPS on port " + wsPort);


io.sockets.on('connection', function (socket) {
    var socketRef = socket;

    socket.on('client', function () {
      socketRef.join("clients");
      console.log("Client connected");
    });

    socket.on('sendevent', function (data){
        // Data recieved from runner
        // emit data to clients
        io.sockets.in('clients').emit('sendfromserver', data);
    });

    socket.on('runnerConnect', function (data){
        console.log(data);
    });
});


var httpServer = require('http-server');

var mobileApp = httpServer.createServer(
    {
      root : './mobile_app',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    });
var portMobile   = process.env.PORT_MOBILE || 3000;
mobileApp.listen(portMobile);
console.log("Web server [mobile app] running on port : " + portMobile);


var viewer = httpServer.createServer(
  {
    root : './viewer',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  });

var port   = process.env.PORT || 3001;
viewer.listen(port);
console.log("Web server [viewer app] running on port : " + port);


