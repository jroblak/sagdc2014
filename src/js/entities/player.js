var Player = function (game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'happy-man');
	game.add.existing(this);

	this.movement;
	this.anchor.setTo(0.5, 0.95);
		
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

/**
 * Automatically called by World.update
 */
Player.prototype.update = function() {
};

Player.prototype.moveTo = function(x, y, done) {
	console.log(x, y);
	if (this.movement && this.movement.isRunning) {
		this.movement.stop();
	}

	var duration = (this.game.physics.arcade.distanceToXY(this, x, y) / 300) * 1000;
	this.movement = this.game.add.tween(this)
		.to({ x: x, y: y }, duration, Phaser.Easing.Linear.None, true);
	if(done) {
		this.movement.onComplete.add(done, this);
	}
};

module.exports = Player;
