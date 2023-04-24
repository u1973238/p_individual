class MyGame extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image("sky", "../assets/sky.png");
    }

    create() {

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