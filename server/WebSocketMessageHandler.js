import { MESSAGES_TYPES } from "./Constants";
import PlayersManager from './PlayersManager';

class WebSocketMessageHandler {
  constructor(player) {
    this.player = player;
  }
  handleMessage(message) {
    switch (message.type) {
      case MESSAGES_TYPES.RECIVED.HANDSHAKE: {
        const { username } = message.payload;
        this.player.setName(username);
        this.player.joinGame();
        PlayersManager.getRoomInitialInformation(this.player);
        break;
      }
      case MESSAGES_TYPES.RECIVED.MOVE_UP: {
        this.player.moveUp();
        break;
      }
      case MESSAGES_TYPES.RECIVED.MOVE_DOWN: {
        this.player.moveDown();
        break;
      }
      case MESSAGES_TYPES.RECIVED.MOVE_LEFT: {
        this.player.moveLeft();
        break;
      }
      case MESSAGES_TYPES.RECIVED.MOVE_RIGHT: {
        this.player.moveRight();
        break;
      }

      default: {
        console.log('Inna akcja', message);
        break;
      }

    }
  }
}

module.exports = WebSocketMessageHandler;