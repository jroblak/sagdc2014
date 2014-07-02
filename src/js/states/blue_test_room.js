var Player = require('../entities/player');

var BlueRoom = function () {
  this.player = null;
};

BlueRoom.prototype = {

  create: function () {
		var bg = this.game.add.image(0, 0, 'blue_room');

    var map = this.game.add.tilemap('blue_room');
		map.addTilesetImage('blue_room');

    var x = (this.game.width / 2) - 100;
    var y = (this.game.height / 2) - 50;

    this.player = new Player(this.game, x, y);

  },

  update: function () {
  }
};

module.exports = BlueRoom;
