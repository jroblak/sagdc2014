//This is a mixin for making Phaser sprites from Tiled objects

var Utils = require('../utils');

var ClickableSprite = function(game, tiledObj) {
    this.x = tiledObj.x;
    this.y = tiledObj.y;

    Utils.extend(this, Object.create(Phaser.Sprite.prototype));
	Phaser.Sprite.call(this, game, tiledObj.x, tiledObj.y, 'light_switch');
	game.add.existing(this);

    var bounds = this.getBounds();
    bounds.offset(this.x, this.y);
    this.includesPoint = function(x, y) {
        return (
            x >= bounds.x &&
            x <= bounds.x + bounds.width &&
            y >= bounds.y &&
            y <= bounds.y + bounds.height
        )
    };
    this.update = function() {};
};

module.exports = ClickableSprite;
