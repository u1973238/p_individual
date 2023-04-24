import Phaser from "phaser";
import sky from "./assets/sky.png";

class MyGame extends Phaser.Scene {
    constructor() {
        super("PhaserGame");
    }

    preload() {
        this.load.image("back", "sky");
    }

    create() {
        this.background = this.add.image(50, 250, "back");
    }

    update() {

    }


}

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 450 },
        debug: false,
      },
    },
    scene: MyGame,
  };

  const game = new Phaser.Game(config);