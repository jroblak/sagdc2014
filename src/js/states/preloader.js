var Preloader = function (game) {
  this.asset = null;
  this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

  preload: function () {
    this.asset = this.add.sprite(320, 240, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('testsprite', 'assets/test.png');
    this.load.image('greg', 'assets/greg.png');
    this.load.tilemap('blue_room', 'assets/tilemaps/blue_room.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('red_room', 'assets/tilemaps/red_room.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('blue_room', 'assets/test_bg_blue.jpg');
    this.load.image('red_room', 'assets/test_bg_red.jpg');
    this.load.spritesheet('light_switch', 'assets/light_switch.png', 32, 32);
  },

  create: function () {
    this.asset.cropEnabled = false;
  },

  update: function () {
    if (!!this.ready) {
      this.game.state.start('Menu');
    }
  },

  onLoadComplete: function () {
    this.ready = true;
  }
};
