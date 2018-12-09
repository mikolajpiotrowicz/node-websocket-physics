import p2 from "p2";
import { world} from "./World";
import WebSocketMessageHandler from "./WebSocketMessageHandler";

class Player  {
    constructor(connection) {
        this.name = "";
        this.connection = connection;
        this.inGame = false;
        this.body = new p2.Body({
          mass: 5,
          position: [500, 500]
        });
        const circleShape = new p2.Circle({ radius: 15 });
        this.body.addShape(circleShape);
        world.addBody(this.body);
        this.handleMessages();

    }
    joinGame() {
      this.inGame = true;
    }
    setName(name) {
      this.name = name;
      console.log(this);
    }

    handleMessages() {
      const messageHandler = new WebSocketMessageHandler(this);
      this.connection.on('message', (message) => {
        if (message.type === 'utf8') {
          messageHandler.handleMessage(JSON.parse(message.utf8Data), this);
        }
      });
    }

    sendMessage(message) {
        const parsedMessage = JSON.stringify(message)
        this.connection.sendUTF(parsedMessage);
    }
    moveUp() {
        this.body.applyImpulse([0, -50]);
    }
    moveDown() {
        this.body.applyImpulse([0, 50]);
    }
    moveLeft() {
        this.body.applyImpulse([-50, 0]);
    }
    moveRight() {
        this.body.applyImpulse([50, 0]);
    }

}

export default Player;