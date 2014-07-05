var GameScreen = require('../states/game_screen');

var BlueRoom = function() {
  this.map = null;
};

BlueRoom.prototype = new GameScreen();
BlueRoom.prototype.create = function() {
	playerState.currentLevel = 'BlueRoom';

	var bg = this.game.add.image(0, 0, 'blue_room');

	this.map = this.game.add.tilemap('blue_room');
	var mapBg = this.map.createLayer('bg');

	this.initScreen();
};

module.exports = BlueRoom;
