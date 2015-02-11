var port = process.env.WS_PORT || 8080;
var io   = require('socket.io').listen(port);

console.log("Server running on port " + port);


io.sockets.on('connection', function (socket) {
    var socketRef = socket;

    socket.on('client', function (){
        // Client connected - send all tracking data
        socketRef.join("clients");
        var out = {test: "test"};
        socketRef.emit('allData', out);
    });

    socket.on('sendevent', function (data){
        // Data recieved from runner

        // emit data to clients
        io.sockets.in('clients').emit('sendfromserver', data);
        console.log(data);
    });

    socket.on('runnerConnect', function (data){
        console.log(data);
    });
});

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)");
    process.exit();
})
