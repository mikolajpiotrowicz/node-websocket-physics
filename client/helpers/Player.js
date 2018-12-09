import Game from './Game';

export default class Player {
  constructor(id, name, x, y) {
    this.id = id;
    this.name = name;
    this.sprite = Game.world.createPlayerSprite(x, y);
  }

  updatePosition(x, y) {
    console.log(x, y, 'to dostaje');
    this.sprite.x = x;
    this.sprite.y = y ;
  }
}