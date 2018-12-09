import * as PIXI from "pixi.js";

class World {
  constructor(){
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight - 4;
    this.app = new PIXI.Application(width, height, {backgroundColor : 0xFFBB00});
    document.body.appendChild(this.app.view)
    this.entities = [];


  }
  addEntity(entity){
    this.app.stage.addChild(entity);
  }
  start() {
    this.app.ticker.add(function(delta) {
      // just for fun, let's rotate mr rabbit a little
      // delta is 1 if running at 100% performance
      // creates frame-independent transformation
      // p.rotation += 0.1 * delta;
    });
  }
  createPlayerSprite(x, y) {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0x000000);
    graphics.lineStyle(0);
    graphics.drawRect(0, 0, 15, 15);
    graphics.endFill();
    graphics.pivot.x = graphics.width / 2;
    graphics.pivot.y = graphics.height / 2;
    graphics.x = x;
    graphics.y = y;
    this.entities.push(graphics);
    this.addEntity(graphics);
    return graphics;
  }
}

export default World;