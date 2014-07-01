var BlueRoom = function () {
  this.player = null;
};

module.exports = BlueRoom;

BlueRoom.prototype = {

  create: function () {
    var x = (this.game.width / 2) - 100;
    var y = (this.game.height / 2) - 50;

    this.player = new Player(this.game, x, y);
    this.game.load.tilemap('map', 'assets/tilemaps/blue_room.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('background', 'assets/images/backgrounds/blue_test_room.jpg');

		var bg = game.add.tileSprite(0, 0, 1024, 728, 'background');
    bg.fixedToCamera = true;

    map = game.add.tilemap('map');

    map.addTilesetImage('tiles-1');

    map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);

    layer = map.createLayer('Tile Layer 1');

    //  Un-comment this on to see the collision tiles
    // layer.debug = true;

    layer.resizeWorld();
  },

  update: function () {
  }
};
