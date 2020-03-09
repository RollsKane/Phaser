const config = {
  width: 1320, // Tamaño del juego
  heigth: 1200,
  parent: "container", // Contenedor padre del juego
  type: Phaser.AUTO, // modo de render (Auto antepone OpenGL)
  scene: {
    // cargo las funciones principales de la escena
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config); // Esta línea carga Phaser con la configuración indicada arriba

function preload() {
  console.log("soy Preload");
}

function create() {
  console.log("soy Create");
}

function update() {}
