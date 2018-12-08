const MESSAGE_TYPES = {
  MOVE_UP: 'MOVE_UP',
  MOVE_DOWN: 'MOVE_DOWN',
  MOVE_LEFT: 'MOVE_LEFT',
  MOVE_RIGHT: 'MOVE_RIGHT',
};


class WebSocketMessageHandler {
  constructor(player) {
    this.player = player;
  }
  handleMessage(message) {
    switch (message.type) {
      case MESSAGE_TYPES.MOVE_UP: {
        this.player.moveUp();
        break;
      }
      case MESSAGE_TYPES.MOVE_DOWN: {
        this.player.moveDown();
        break;
      }
      case MESSAGE_TYPES.MOVE_LEFT: {
        this.player.moveLeft();
        break;
      }
      case MESSAGE_TYPES.MOVE_RIGHT: {
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