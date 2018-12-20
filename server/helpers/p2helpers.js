import p2 from 'p2';

export const createPlane = (position, angle, world) => {
    const planeBody = new p2.Body({
        position: position,
        angle: angle
    });
    planeBody.addShape(new p2.Plane());
    world.addBody(planeBody);
    return planeBody;
};
