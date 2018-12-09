import { GAME_STATES } from "./Constants";
import World from './World';

class Game {
  constructor(){
    this.world = new World();
    this.state = GAME_STATES.LOBBY;
    this.localPlayer = {
      id: '',
      name: '',
    }
  }

  startGame(){
    this.state = GAME_STATES.INGAME;
  }

  stopGame(){
    this.state = GAME_STATES.LOBBY;
  }

  setLocalPlayer(player) {
    this.localPlayer = player;
  }
}

const game = new Game();

export default game;