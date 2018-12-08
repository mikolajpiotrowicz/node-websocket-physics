import mitt from 'mitt';


const MESSAGES_TYPES = {
  ENTITIES_POSITION: 'ENTITIES_POSITION',
  HANDSHAKE: 'HANDSHAKE'
};

const emitter = mitt();

class WebSocketMessageHandler {
  static handleMessage(message) {
    switch (message.type) {
      case MESSAGES_TYPES.HANDSHAKE: {
        console.log(message.payload.handshakeInformation)
        break;
      }
      case MESSAGES_TYPES.ENTITIES_POSITION: {
        console.log(message.payload);
        emitter.emit(MESSAGES_TYPES.ENTITIES_POSITION, message.payload)
        break;
      }
      default: {
        console.log(message, 'Typ nieznany');
        break;
      }
    }
  }
}

export default WebSocketMessageHandler;
export { emitter };