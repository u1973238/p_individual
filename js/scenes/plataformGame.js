class PlataformScene extends Phaser.Scene
{
    constructor() {
        super("PlataformScene");
    }

    preload() {
    }

    create() {
    }

    update() {
    }


}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    scene: [PlataformScene]
  }

  const game = new Phaser.Game(config);