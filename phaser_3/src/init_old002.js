const config = {
  width: 320 * 2, // Tamaño del juego
  heigth: 180 * 2,
  parent: "container", // Contenedor padre del juego
  type: Phaser.AUTO, // modo de render (Auto antepone OpenGL)
  scene: {
    // cargo las funciones principales de la escena
    preload: preload,
    create: create,
    update: update
  },
  // FÍSICAS \\
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 500
      }
    }
  }
};

var game = new Phaser.Game(config); // Esta línea carga Phaser con la configuración indicada arriba

function preload() {
  this.load.image("player", "./assets/Player/WalkingCycle_Right.gif");
}

function create() {
  this.player = this.add.image(150, 150, "player");
  this.input.keyboard.on("keydown_RIGHT", () => {
    this.player.x++;
  });
  this.input.keyboard.on("keydown_LEFT", () => {
    this.player.x--;
  });

  this.input.keyboard.on("keydown_UP", () => {
    this.player.y--;
  });
  this.input.keyboard.on("keydown_DOWN", () => {
    this.player.y++;
  });
}

function update(time, delta) {}
