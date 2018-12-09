import World from './World';

export default class Player {
  constructor(id, name, x, y) {
    this.id = id;
    this.name = name;
    this.sprite = World.createPlayerSprite(x, y);
  }

  updatePosition(x, y) {
    this.sprite = { x, y };
  }
}