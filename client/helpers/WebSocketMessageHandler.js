import mitt from 'mitt';
import {MESSAGES_TYPES} from "./Constants";
import PlayersManager from './PlayersManager';
import Game from './Game';

const emitter = mitt();

class WebSocketMessageHandler {
  static handleMessage(message) {
    switch (message.type) {
      case MESSAGES_TYPES.RECIVED.HANDSHAKE: {
        Game.setLocalPlayer({
          name: '',
          id: message.payload.id,
        });
        break;
      }
      case MESSAGES_TYPES.RECIVED.ENTITIES_POSITION: {
        PlayersManager.updatePositions(message.payload);
        break;
      }
      case MESSAGES_TYPES.RECIVED.ROOM_INITIALIZE: {
        for (let i = 0; i < message.payload.length; i++) {
          const { id, name, x, y } = message.payload[i];
          PlayersManager.createPlayer(id, name, x, y);
        }
        console.log('eee', PlayersManager.players[Game.localPlayer.id]);
        Game.world.viewport.follow(PlayersManager.players[Game.localPlayer.id].sprite);
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