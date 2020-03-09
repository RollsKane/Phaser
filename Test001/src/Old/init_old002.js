var config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  pixelArt: true,
  physics: {
    default: "arcade",

    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var player;
var graphics;
var cursors;
var text;
var moveCam = false;

var game = new Phaser.Game(config);

function preload() {
  this.load.image("bg", "assets/BGs/BG001.png");

  this.load.spritesheet("player", "assets/Player/Walking_sheet.png", {
    frameWidth: 21,
    frameHeight: 40
  });
}

function create() {
  this.cameras.main.setBounds(0, 0, 720 * 2, 176);

  for (let x = 0; x < 2; x++) {
    this.add.image(720 * x, 0, "bg").setOrigin(0);
  }

  cursors = this.input.keyboard.createCursorKeys();

  player = this.physics.add.image(400, 100, "player");

  //  Player physics properties. Give the little guy a slight bounce.
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  //  Our player animations, turning, walking left and walking right.
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: "turn",
    frames: [{ key: "dude", frame: 4 }],
    frameRate: 20
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });

  //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = this.physics.add.staticGroup();

  //  Here we create the ground.
  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  platforms
    .create(0, 0, "ground")
    .setScale(2)
    .refreshBody();

  this.cameras.main.startFollow(player, true);
  this.cameras.main.setZoom(3);

  if (this.cameras.main.deadzone) {
    graphics = this.add.graphics().setScrollFactor(0);
    graphics.lineStyle(2, 0x00ff00, 1);
    graphics.strokeRect(
      200,
      200,
      this.cameras.main.deadzone.width,
      this.cameras.main.deadzone.height
    );
  }

  text = this.add
    .text(220, 240)
    .setScrollFactor(0)
    .setFontSize(16)
    .setColor("#ffffff");

  //  Collide the player with the platforms
  this.physics.add.collider(player, platforms);
}

function update() {
  var cam = this.cameras.main;

  if (cam.deadzone) {
    text.setText([
      "Cam Control: " + moveCam,
      "ScrollX: " + cam.scrollX,
      "ScrollY: " + cam.scrollY,
      "MidX: " + cam.midPoint.x,
      "MidY: " + cam.midPoint.y,
      "deadzone left: " + cam.deadzone.left,
      "deadzone right: " + cam.deadzone.right,
      "deadzone top: " + cam.deadzone.top,
      "deadzone bottom: " + cam.deadzone.bottom
    ]);
  } else if (cam._tb) {
    text.setText([
      "Cam Control: " + moveCam,
      "ScrollX: " + cam.scrollX,
      "ScrollY: " + cam.scrollY,
      "MidX: " + cam.midPoint.x,
      "MidY: " + cam.midPoint.y,
      "tb x: " + cam._tb.x,
      "tb y: " + cam._tb.y,
      "tb w: " + cam._tb.width,
      "tb h: " + cam._tb.height,
      "tb b: " + cam._tb.bottom
    ]);
  }

  player.setVelocity(0);

  if (moveCam) {
    if (cursors.left.isDown) {
      cam.scrollX -= 4;
    } else if (cursors.right.isDown) {
      cam.scrollX += 4;
    }

    if (cursors.up.isDown) {
      cam.scrollY -= 4;
    } else if (cursors.down.isDown) {
      cam.scrollY += 4;
    }
  } else {
    if (cursors.left.isDown) {
      player.setVelocityX(-400);
    } else if (cursors.right.isDown) {
      player.setVelocityX(400);
    }

    if (cursors.up.isDown) {
      player.setVelocityY(-400);
    } else if (cursors.down.isDown) {
      player.setVelocityY(400);
    }
  }
}
