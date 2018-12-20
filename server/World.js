import p2 from 'p2';
import { createPlane } from "./helpers/p2helpers";
import PlayersManager from './PlayersManager';


class World {
    constructor() {
        this.world = new p2.World({
            gravity:[0, -100],
        });
        this.timeStep = 1 / 60;
        this.gameWidth = 1920;
        this.gameHeight = 1080;
        this.playerSize = 15;
        this.createWorldBounds();
    }

    createWorldBounds() {
        this.bottomBound = createPlane([0, 0 +  this.playerSize ], 0, this.world);
        this.topBound = createPlane([0, this.gameHeight + this.playerSize], Math.PI, this.world); // Top
        this.leftBound = createPlane([0 + this.playerSize , 0], -Math.PI / 2, this.world); // Left
        this.rightBound = createPlane([this.gameWidth + this.playerSize, 0], Math.PI / 2, this.world); // Right    }
    }

    step() {
        PlayersManager.updatePositions({});
    }

    start() {
        this.runInterval = setInterval(() => {
            this.world.step(this.timeStep);
            this.step();

        }, 1000 * this.timeStep);

    }
}

const world = new World();

export default world;
