Item = function (game, x, y, item) {
    this.name = item;
    Phaser.Sprite.call(this, game, x, y, item);
    game.add.existing(this);
}

Item.prototype = Object.create(Phaser.Sprite.prototype);
Item.prototype.constructor = Item;

Item.prototype.update = function() {
};

Item.prototype.onUse = function() {
};

Item.prototype.onClick = function() {
};

module.exports = Item;
