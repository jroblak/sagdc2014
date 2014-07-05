var inside = require('point-in-polygon');

var ClickablePolygon = function(polyObject) {
    this.name = polyObject.name;

    //The polygon is stored with the first point at 0,0 so we have to position it
    this.polygon = translate(polyObject.x, polyObject.y, polyObject.polygon);
}

ClickablePolygon.prototype.includesPoint = function(x, y) {
    return inside([x, y], this.polygon);
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


var ToRed = function(polygon) {
};

module.exports = ClickablePolygon;
