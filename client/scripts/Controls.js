const MESSAGE_TYPES = {
    MOVE_UP: 'MOVE_UP',
    MOVE_DOWN: 'MOVE_DOWN',
    MOVE_LEFT: 'MOVE_LEFT',
    MOVE_RIGHT: 'MOVE_RIGHT',
};

window.onkeydown = (e) => {
  switch (e.key) {
      case 'ArrowUp': {
          connection.send(JSON.stringify({type: MESSAGE_TYPES.MOVE_UP}));
          break;
      }
      case 'ArrowDown': {
          connection.send(JSON.stringify({type: MESSAGE_TYPES.MOVE_DOWN}));
          break;
      }
      case 'ArrowLeft': {
          connection.send(JSON.stringify({type: MESSAGE_TYPES.MOVE_LEFT}));
          break;
      }
      case 'ArrowRight': {
          connection.send(JSON.stringify({type: MESSAGE_TYPES.MOVE_RIGHT}));
          break;
      }

  }
};