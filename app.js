var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    SIO = require('socket.io')(http),
    config = require("./Config.json");



SIO.on("connection", function(socket) {

});

    
http.listen(config.port, () => {
    console.log(`Listening on port: ${config.port}`)
});