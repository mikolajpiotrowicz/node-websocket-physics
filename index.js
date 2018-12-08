const p2 = require('p2');
const ClientList = require('./scripts/ClientList');
const wsServer = require('./scripts/WebSocketHandler.js');

const tick = () => {
    ClientList.sendMessageToAll({
        type: 'ENTITIES_POSITION',
        payload: {
            x: circleBody.position[0],
            y: circleBody.position[1],
            velocity: +circleBody.velocity,
        },
    });
};
const world = new p2.World({
    gravity:[0, 0]
});

const circleBody = new p2.Body({
    mass: 5,
    position: [500, 500]
});
const moveUp = (body) => body.applyImpulse([50, 0]);
const moveDown = (body) => body.applyImpulse([-50, 0]);
const moveLeft = (body) => body.applyImpulse([0, -50]);
const moveRight = (body) => body.applyImpulse([0, 50]);

const circleShape = new p2.Circle({ radius: 10 });
circleBody.addShape(circleShape);
world.addBody(circleBody);

const groundBody = new p2.Body({
    mass: 0
});
const groundShape = new p2.Plane();
groundBody.addShape(groundShape);
world.addBody(groundBody);

const timeStep = 1 / 60; // seconds

setInterval(() => {
    world.step(timeStep);
    tick();

}, 1000 * timeStep);


