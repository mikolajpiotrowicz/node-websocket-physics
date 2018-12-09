import { MESSAGES_TYPES } from "./Constants";

class WebSocketMessageHandler {
  constructor(player) {
    this.player = player;
  }
  handleMessage(message) {
    switch (message.type) {
      case MESSAGES_TYPES.RECIVE.HANDSHAKE: {
        const { username } = message.payload;
        this.player.setName(username);
        this.player.joinGame();
        break;
      }
      case MESSAGES_TYPES.RECIVE.MOVE_UP: {
        this.player.moveUp();
        break;
      }
      case MESSAGES_TYPES.RECIVE.MOVE_DOWN: {
        this.player.moveDown();
        break;
      }
      case MESSAGES_TYPES.RECIVE.MOVE_LEFT: {
        this.player.moveLeft();
        break;
      }
      case MESSAGES_TYPES.RECIVE.MOVE_RIGHT: {
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