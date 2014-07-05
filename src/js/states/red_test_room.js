var GameScreen = require('../states/game_screen');

var RedRoom = function() {
	this.map = null;
};

RedRoom.prototype = new GameScreen();
RedRoom.prototype.create = function() {
	playerState.currentLevel = 'RedRoom';

	var bg = this.game.add.image(0, 0, 'red_room');

	this.map = this.game.add.tilemap('red_room');

	this.initScreen();
};

module.exports = RedRoom;
