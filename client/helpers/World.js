import * as PIXI from "pixi.js";
import Viewport from 'pixi-viewport';

class World {
  constructor(){
    this.width = document.documentElement.clientWidth;
    this.height = document.documentElement.clientHeight - 4;
    this.app = new PIXI.Application(this.width, this.height, {backgroundColor : 0xFFBB00});
    document.body.appendChild(this.app.view)
    this.entities = [];
    this.viewport = new Viewport({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      worldWidth: 1000,
      worldHeight: 1000,

      interaction: this.app.renderer.interaction // the interaction module is important for wheel() to work properly when renderer.view is placed or scaled
    });

// add the viewport to the stage
    this.app.stage.addChild(this.viewport);

// activate plugins
    this.viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate();

    const playground = new PIXI.Graphics();
    playground.beginFill(0xFF0000);
    playground.lineStyle(0);
    playground.drawRect(-5000, -15, 12000, 700);
    playground.endFill();
    this.addEntity(playground);
  }
  addEntity(entity){
    console.log(this);
    this.viewport.addChild(entity);
    this.entities.push(entity);
  }
  start() {
    this.app.ticker.add(function(delta) {
      // just for fun, let's rotate mr rabbit a little
      // delta is 1 if running at 100% performance
      console.log(delta);
      // creates frame-independent transformation
      // p.rotation += 0.1 * delta;
    });
  }
  createPlayerSprite(x, y) {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0x000000);
    graphics.lineStyle(0);
    graphics.drawCircle(0, 0, 15, 15);
    graphics.endFill();
    graphics.pivot.x = graphics.width / 2;
    graphics.pivot.y = graphics.height / 2;
    graphics.x = x;
    graphics.y = y;
    this.entities.push(graphics);
    this.addEntity(graphics);
    return graphics;
  }
  createText(text, x, y) {
    const textObject = new PIXI.Text(text, {fontFamily : 'Arial', fontSize: 16, fill : 0x000000});
    textObject.x = x;
    textObject.y = y;
    textObject.anchor.set(0.5);
    this.addEntity(textObject);

    return textObject;
  }
}

export default World;