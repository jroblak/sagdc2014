var Player = require('../entities/player');
var inside = require('point-in-polygon');

var BlueRoom = function () {
  this.player = null;
};

BlueRoom.prototype = {

  create: function () {
		var bg = this.game.add.image(0, 0, 'blue_room');

    var map = this.game.add.tilemap('blue_room');
		var mapBg = map.createLayer('bg');
		this.floorPolygon = extractPolygonFromMap(map, 'floor');

    var x = (this.game.width / 2) - 100;
    var y = (this.game.height / 2) - 50;

    this.player = new Player(this.game, x, y);

    this.input.onDown.add(this.onInputDown, this);
  },

  onInputDown: function (cursor) {
		console.log(cursor.x, cursor.y);
		console.log(JSON.stringify(this.floorPolygon));
		console.log(inside([cursor.x, cursor.y], this.floorPolygon));
  }
};

var extractPolygonFromMap = function(map, name) {
	var polyObject = map.objects.polygons.filter(function(x) {
		return(x.name == name);
	})[0];
	
	var polygon = polyObject.polygon;
	console.log(JSON.stringify(polygon));
	for(i in polygon) {
		var vertex = polygon[i];
		vertex[0] += polyObject.x;
		vertex[1] += polyObject.y;
	};
	console.log(JSON.stringify(polygon));
	return polygon;
};

module.exports = BlueRoom;
