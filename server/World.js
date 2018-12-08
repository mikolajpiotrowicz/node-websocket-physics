import p2 from 'p2';
import PlayersManager from './PlayersManager';

const tick = () => {
  PlayersManager.updatePositions({});
};

const world = new p2.World({
    gravity:[0, 0]
});

const groundBody = new p2.Body({
    mass: 0
});
const groundShape = new p2.Plane();
groundBody.addShape(groundShape);
world.addBody(groundBody);



const timeStep = 1 / 60; // seconds
const run = setInterval(() => {
    world.step(timeStep);
    tick();

}, 1000 * timeStep);

export default run;
export { world };


