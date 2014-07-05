//This is for making useful objects out of tiled objects

var Polygon = require('./polygon');
var Utils = require('../utils');

var Clickable = function(tiledObj) {
    this.name = tiledObj.name;

    if(tiledObj.polygon) { Polygon.call(this, tiledObj) }

    Utils.extend(this, tiledObj.properties);
}


Door = function(tiledObj) {
    Clickable.call(this, tiledObj);
}

Floor = function(tiledObj) {
    Clickable.call(this, tiledObj);
}

clickables = {
    door: Door,
    floor: Floor,
}

module.exports.create = function(tiledObj) {
    return new clickables[tiledObj.name](tiledObj);
}
