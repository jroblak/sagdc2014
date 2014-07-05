//This is a mixin for making useful objects from tiled polygons

var inside = require('point-in-polygon');

Polygon = function(tiledObj) {
    //The polygon is stored with the first point at 0,0 so we have to position it
    this.polygon = translate(tiledObj.x, tiledObj.y, tiledObj.polygon);
    this.includesPoint = function(x, y) {
        return inside([x, y], this.polygon);
    };
};

var translate = function(x, y, polygon) {
    var poly = polygon.slice(0);
	for(i in poly) {
		var vertex = poly[i];
		vertex[0] += x;
		vertex[1] += y;
	};
    return poly;
};

module.exports = Polygon;
