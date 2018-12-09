import mitt from 'mitt';
import {MESSAGES_TYPES} from "./Constants";
const emitter = mitt();

class WebSocketMessageHandler {
  static handleMessage(message) {
    switch (message.type) {
      case MESSAGES_TYPES.RECIVE.HANDSHAKE: {
        console.log(message.payload.handshakeInformation);
        break;
      }
      case MESSAGES_TYPES.RECIVE.ENTITIES_POSITION: {
        emitter.emit(MESSAGES_TYPES.ENTITIES_POSITION, message.payload)
        break;
      }
      case MESSAGES_TYPES.RECIVE.ROOM_INITIALIZE: {
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