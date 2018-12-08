import WebSocketMessageHandler from './WebSocketMessageHandler';
import isNode from 'detect-node';
let connection;
if (!isNode) {
  window.WebSocket = window.WebSocket || window.MozWebSocket;

  connection = new WebSocket('ws://127.0.0.1:3937');

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
}
else {
  connection = {}
}

export default connection;
