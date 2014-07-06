//This is for making useful objects out of tiled objects

var ClickablePolygon = require('./clickable_polygon');
var ClickableSprite = require('./clickable_sprite');
var Utils = require('../utils');

var Clickable = function(game, tiledObj) {
    if(tiledObj.polygon) {
        ClickablePolygon.call(this, game, tiledObj)
    } else {
        ClickableSprite.call(this, game, tiledObj)
    }

    this.name = tiledObj.name;

    Utils.extend(this, tiledObj.properties);
}

Clickable.prototype.click = function(cursor, state) {
    try {
        this.onClick(cursor, state);
    } catch(err) {
        console.log(this.name, 'onClick');
    }
};

Clickable.prototype.onClick = function(options) {
    throw 'not implemented'
};

module.exports = Clickable;
