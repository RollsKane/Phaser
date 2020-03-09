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
        // y: 500
      }
    }
  }
};

var game = new Phaser.Game(config); // Esta línea carga Phaser con la configuración indicada arriba

function preload() {
  this.load.image("player", "./assets/Player/WalkingCycle_Right.gif");
}

function create() {
  this.player = this.physics.add.image(150, 150, "player");
  this.player.setScale(4);

  this.cursor = this.input.keyboard.createCursorKeys();
  console.log(this.cursor);
}

function update(time, delta) {
  if (this.cursor.right.isDown) {
    this.player.x++;
  } else if (this.cursor.left.isDown) {
    this.player.x--;
  } else if (this.cursor.up.isDown) {
    this.player.y--;
  } else if (this.cursor.down.isDown) {
    this.player.y++;
  }
}
