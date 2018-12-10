import MessagesFactory from './WebSocketMessageFactory';

const MESSAGE_TYPES = {
  MOVE_UP: 'MOVE_UP',
  MOVE_DOWN: 'MOVE_DOWN',
  MOVE_LEFT: 'MOVE_LEFT',
  MOVE_RIGHT: 'MOVE_RIGHT',
};

const mountKeyListener = () => {
  window.onkeydown = (e) => {
    switch (e.key) {
      case 'ArrowUp': {
        MessagesFactory.createMessage(MESSAGE_TYPES.MOVE_UP);
        break;
      }
      case 'ArrowDown': {
        MessagesFactory.createMessage(MESSAGE_TYPES.MOVE_DOWN);
        break;
      }
      case 'ArrowLeft': {
        MessagesFactory.createMessage(MESSAGE_TYPES.MOVE_LEFT);
        break;
      }
      case 'ArrowRight': {
        MessagesFactory.createMessage(MESSAGE_TYPES.MOVE_RIGHT);
        break;
      }
      case 'Enter': {
        const event = new Event('start-game');
        window.dispatchEvent(event);
        break;
      }
      default: {
        console.log(e.key, 'inny klawisz');
      }
    }
  };
};

export default mountKeyListener;