import WebSocket from 'websocket';
import http from 'http';
import uuidv1 from 'uuid/v1';
import PlayersManager from './PlayersManager';
import WebSocketMessageHandler from  './WebSocketMessageHandler';
const server = http.createServer(function(request, response) {
});
const WebSocketServer = WebSocket.server;
server.listen(3937, function() { });

const wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.getUniqueID = function () {
    return uuidv1();
};

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);
    connection.id = wsServer.getUniqueID();
    console.log('open', connection.id)
    PlayersManager.createPlayer(connection);
    PlayersManager.sendMessageToAll({
      type: "HANDSHAKE",
      payload: {
        handshakeInformation: `New Client created with id ${connection.id}`
      }
    });


    connection.on('close', function(connection) {
        console.log('close', this.id);
        PlayersManager.removePlayer(this);
    });
});

export { wsServer };