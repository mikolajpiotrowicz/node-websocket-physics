import * as PIXI from "pixi.js";
import * as Filters from 'pixi-filters';
import Viewport from 'pixi-viewport';

class World {
  constructor(){
    this.width = document.documentElement.clientWidth;
    this.height = document.documentElement.clientHeight - 4;
    this.app = new PIXI.Application(this.width, this.height, {antialias: true, backgroundColor : 0x5c5c5c});
    document.body.appendChild(this.app.view)
    this.entities = [];
    this.viewport = new Viewport({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      worldWidth: 1920,
      worldHeight: 1080,
      interaction: this.app.renderer.interaction // the interaction module is important for wheel() to work properly when renderer.view is placed or scaled
    });
    this.app.stage.addChild(this.viewport);
    this.glowEffect = new Filters.GlowFilter(35, 2, 0.2, 0xFF0000, 1);
    this.glowEffect.padding = 50;
    console.log(this.app, 'app');
    this.viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate();
    this.isGrowing = false;
    this.glowRadiusInterval = setInterval(() => {
      if (this.isGrowing) {
        const color = 0xFF0000 - (256 * 0.181) - (256 * 256 * 0.181) - (256 * 256 * 256 * 0.181);
        this.glowEffect.color = color;
        this.glowEffect.distance++;
        if(this.glowEffect.distance >= 45) {
          this.isGrowing = false;
        }
      }
      else {
        const color = 0xFF0000 - (256 * 0.181) + (256 * 256 * 0.181) + (256 * 256 * 256 * 0.181);
        this.glowEffect.color = color;
        this.glowEffect.distance--;
        if(this.glowEffect.distance <= 20) {
          this.isGrowing = true;
        }
      }
    }, 45);
    let texture = PIXI.Texture.fromImage('static/tile.jpg');
    var bgTilingSprite = new PIXI.extras.TilingSprite(texture, 1920, 1080);
    this.addEntity(bgTilingSprite);
  }
  addEntity(entity){
    this.viewport.addChild(entity);
    this.entities.push(entity);
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
    graphics.drawCircle(0, 0, 15, 15);
    graphics.endFill();
    graphics.pivot.x = graphics.width / 2;
    graphics.pivot.y = graphics.height / 2;
    graphics.x = x;
    graphics.y = y;
    graphics.filters = [ this.glowEffect ];
    graphics.boundsPadding = 20;
    graphics.cacheAsBitmap = true;

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
