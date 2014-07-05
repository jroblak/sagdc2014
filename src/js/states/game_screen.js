var Player = require('../entities/player');
var ClickablePolygon = require('../entities/clickable_polygon');

var GameScreen = function() {
  this.player = null;
};

GameScreen.prototype = {
  initScreen: function() {
    this.polygons = extractPolygonsFromTileMapLayer(this.map.objects.polygons);

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
                    var nextRoom = (playerState.currentLevel == 'BlueRoom') ? 'RedRoom' : 'BlueRoom'; 
                    this.game.state.start(nextRoom);
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

module.exports = GameScreen;
