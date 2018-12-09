import Player from './Player.js';
import { MESSAGES_TYPES } from "./Constants";

class PlayersManager {
  constructor() {
    this.players = [];
  }

  createPlayer(connection) {
    const player = new Player(connection);
    player.sendMessage({
      type: "HANDSHAKE",
      payload: {
        id: connection.id
      }
    });
    this.sendMessageToAll({
      type: MESSAGES_TYPES.SEND.PLAYER_JOINED_ROOM,
      payload: {
        player: {
          name: player.name,
          id: player.id,
          x: player.body.x,
          y: player.body.y,
        }
      }
    });
    this.players.push(player);
  }

  removePlayer(connection) {
    this.players = this.players.filter((player) => player.connection.id !== connection.id);
  }

  sendMessageToAll(message) {
    const clientsQuantity = this.players.length;
    if (clientsQuantity > 0) {
      for (let i = 0; i < clientsQuantity; i++) {
        const {inGame} = this.players[i];
        if (inGame) {
          this.players[i].sendMessage(message);
        }
      }
    }
  }
  getRoomInitialInformation(player) {
    player.sendMessage({
      type: MESSAGES_TYPES.SEND.ROOM_INITIALIZE,
      payload: this.getPositions(),
    })
  }
  updatePositions() {
    const positions = this.getPositions();
    const clientsQuantity = this.players.length;
    if (clientsQuantity > 0) {
      this.sendMessageToAll({
        type: 'ENTITIES_POSITION',
        payload: positions
      })
    }
  };

  getPositions() {
    const positions = [];
    const clientsQuantity = this.players.length;
    for (let i = 0; i < clientsQuantity; i++) {
      positions.push({
        x: this.players[i].body.position[0],
        y: this.players[i].body.position[1],
        name: this.players[i].name,
        id: this.players[i].id,
      });
    }

    return positions;
  }

}

const playersManager = new PlayersManager();
export default playersManager;