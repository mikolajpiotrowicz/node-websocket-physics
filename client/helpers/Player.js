import Game from './Game';

export default class Player {
  constructor(id, name, x, y) {
    this.id = id;
    this.name = name;
    this.sprite = Game.world.createPlayerSprite(x, y);
    this.nameSprite = Game.world.createText(name, x, y - 20);
  }

  updatePosition(x, y) {
    console.log(x, y);
    this.sprite.x = x;
    this.sprite.y = y;
    this.nameSprite.x = x;
    this.nameSprite.y = y - 20;
  }
}