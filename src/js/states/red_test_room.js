var Player = require('../entities/player');
var ClickablePolygon = require('../entities/clickable_polygon');

var RedRoom = function () {
  this.player = null;
};

module.exports = RedRoom;

RedRoom.prototype = {

  create: function () {
		playerState.currentLevel = 'RedRoom';

		var bg = this.game.add.image(0, 0, 'red_room');

    var map = this.game.add.tilemap('red_room');
		this.polygons = extractPolygonsFromTileMapLayer(map.objects.polygons);

    var x = (this.game.width / 2);
    var y = (this.game.height / 2) + 250;

    this.player = new Player(this.game, x, y);

    this.input.onDown.add(this.onInputDown, this);
  },

  update: function () {
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
					return this.player.moveTo(x, this.player.y, function() {
						this.game.state.start('BlueRoom');
					});	
				}
			}
		}
  }
};


var extractPolygonsFromTileMapLayer = function(layer) {
	var polys = [];
	for(i in layer) {
		polys.push(new ClickablePolygon(layer[i]));
	}
	return polys;
};
