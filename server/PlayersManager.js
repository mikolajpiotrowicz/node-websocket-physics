import Player from './Player.js';

class PlayersManager {
    constructor(){
        this.players = [];
    }
    createPlayer(connection) {
        const player = new Player(connection);
        this.players.push(player);
    }
    removePlayer(connection){
        this.players = this.players.filter((player) => player.connection.id !== connection.id);
    }
    sendMessageToAll(message) {
        const clientsQuantity = this.players.length;
        if(clientsQuantity > 0) {
            for (let i = 0; i < clientsQuantity; i++) {
                this.players[i].sendMessage(message);
            }
        }
    }
    updatePositions(){
        const positions = [];
        const clientsQuantity = this.players.length;
        if (clientsQuantity > 0) {
          for (let i = 0; i < this.players.length; i++) {
              positions.push({
                x: this.players[i].body.position[0],
                y: this.players[i].body.position[1],
              });
          }
          this.sendMessageToAll({
            type: 'ENTITIES_POSITION',
            payload: positions
          })
        }
    }
}

const playersManager = new PlayersManager();
export default playersManager;