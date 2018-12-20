import Game from './Game';

export default class Player {
  constructor(id, name, x, y) {
    this.id = id;
    this.name = name;
    this.sprite = Game.world.createPlayerSprite(x, y);
    this.nameSprite = Game.world.createText(name, x, y);

  }

  updatePosition(x, y) {
    this.sprite.x = x;
    this.sprite.y = y;
    this.nameSprite.x = x - this.sprite.width / 2;
    this.nameSprite.y = y - 50;
  }
}
