import Player from './Player';

class PlayerManager {
  constructor() {
    this.players = [];
  }

  createPlayer(id, name,  x, y) {
    this.players[id] = new Player(id, name,  x, y);
  }

  updatePositions(positions) {
    for(let i = 0; i < positions.length; i++) {
      this.players[positions[i].id].updatePosition(
        positions[i].x, positions[i].y
      )
    }
  }
}

const playerManager = new PlayerManager();

export default playerManager;