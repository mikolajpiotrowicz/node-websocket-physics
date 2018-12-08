import WebSocketConnection from './WebSocketConnectionHandler';

class MessageFactory {
  constructor(){
    this.connection = WebSocketConnection;
  }

  createMessage(type, payload = {}) {
    this.connection.send(JSON.stringify({type, payload}));
  }
}

const messageFactory = new MessageFactory();

export default messageFactory;