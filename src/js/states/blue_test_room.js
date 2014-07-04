var Player = require('../entities/player');
var ClickablePolygon = require('../entities/clickable_polygon');

var BlueRoom = function () {
  this.player = null;
};

BlueRoom.prototype = {

  create: function () {
		var bg = this.game.add.image(0, 0, 'blue_room');

    var map = this.game.add.tilemap('blue_room');
		var mapBg = map.createLayer('bg');
		this.polygons = extractPolygonsFromTileMapLayer(map.objects.polygons, 'floor');
		//this.doorPolygon = extractPolygonFromMap(map, 'door');

    var x = (this.game.width / 2);
    var y = (this.game.height / 2) + 250;

    this.player = new Player(this.game, x, y);

    this.input.onDown.add(this.onInputDown, this);
  },

  onInputDown: function (cursor) {
		var x = cursor.x,
			 y = cursor.y;
		for(i in this.polygons) {
			var polygon = this.polygons[i];
			if(polygon.includesPoint(x, y)) {
				if(polygon.name == 'floor') {
					return this.player.moveTo(x, y);	
				}
				if(polygon.name == 'door') {
					
					return console.log('DOOR');	
				}
			}
		}
  }
};

var extractPolygonsFromTileMapLayer = function(layer, name) {
	var polys = [];
	for(i in layer) {
		polys.push(new ClickablePolygon(layer[i]));
	}
	return polys;
};

module.exports = BlueRoom;
