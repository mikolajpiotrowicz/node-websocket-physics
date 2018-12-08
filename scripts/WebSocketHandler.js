const WebSocketServer = require('websocket').server;
const http = require('http');
const uuidv1 = require('uuid/v1');
const ClientList = require('./ClientList');
const WebSocketMessageHandler = require('./WebSocketMessageHandler');
const server = http.createServer(function(request, response) {
});

server.listen(1337, function() { });

wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.getUniqueID = function () {
    return uuidv1();
};

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);
    connection.id = wsServer.getUniqueID();
    console.log('open', connection.id)
    ClientList.createClient(connection);
    ClientList.sendMessageToAll({message: `New Client created with id ${connection.id}`});

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            WebSocketMessageHandler.handleMessage(JSON.parse(message.utf8Data));
        }
    });

    connection.on('close', function(connection) {
        console.log('close', this.id);
        ClientList.removeClient(this);
    });
});

module.exports = wsServer;