//This is for making useful objects out of tiled objects

var Polygon = require('./polygon');
var Utils = require('../utils');

var Clickable = function(tiledObj) {
    this.name = tiledObj.name;

    if(tiledObj.polygon) { Polygon.call(this, tiledObj) }

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
