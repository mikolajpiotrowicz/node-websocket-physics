window.WebSocket = window.WebSocket || window.MozWebSocket;

const connection = new WebSocket('ws://127.0.0.1:1337');

connection.onopen = function (connection) {
    console.log('connetcted', connection);
};

connection.onerror = function (error) {
    console.log('error', error);
};

connection.onmessage = function (message) {
    const parsedMessage = JSON.parse(message.data);
    WebSocketMessageHandler.handleMessage(parsedMessage);
};