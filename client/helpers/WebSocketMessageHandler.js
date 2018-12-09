import mitt from 'mitt';
import {MESSAGES_TYPES} from "./Constants";
import PlayersManager from './PlayersManager';
const emitter = mitt();

class WebSocketMessageHandler {
  static handleMessage(message) {
    switch (message.type) {
      case MESSAGES_TYPES.RECIVED.HANDSHAKE: {
        console.log(message.payload.handshakeInformation);
        break;
      }
      case MESSAGES_TYPES.RECIVED.ENTITIES_POSITION: {
        PlayersManager.updatePositions(message.payload);
        break;
      }
      case MESSAGES_TYPES.RECIVED.ROOM_INITIALIZE: {
        console.log('inicjalizacja', message);
        for (let i = 0; i < message.payload.length; i++) {
          const { id, name, x, y } = message.payload[i];
          PlayersManager.createPlayer(id, name, x, y);
        }
        break;
      }
      case MESSAGES_TYPES.RECIVED.PLAYER_JOINED_ROOM: {
        const { id, name,  x, y } = message.payload.player;
        PlayersManager.createPlayer(id, name,  x, y );
        break;
      }
      case MESSAGES_TYPES.RECIVED.PLAYER_LEFT_ROOM: {
        PlayersManager.removePlayer(message.payload.id);
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