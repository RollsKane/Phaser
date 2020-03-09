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
  this.load.image("pajaro", "./assets/Player/WalkingCycle_Right.gif"); // carga la imagen en el caché de phaser
}

function create() {
  this.pajaro = this.physics.add.image(150, 200, "pajaro"); // carga ese asset en la escena
  // Los parámetros son X, Y, nombre del asset

  console.log(this.pajaro);
  this.pajaro.setScale(4);
  //this.pajaro.flipX = true;

  this.pajaro.setOrigin(0.5, 1); // Origen centrado abajo
  // Los parámetros son X e Y

  /****FÍSICAS****/
  this.pajaro.setCollideWorldBounds(true); // Collide con límite de canvas
  this.pajaro.setBounce(0.2);
  this.pajaro.setVelocity(50, 0);
}

function update(time, delta) {
  //this.pajaro.angle++;//Giro continuo
  //this.pajaro.y++;
}
