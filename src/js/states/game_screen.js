//main game screen that the various scenes will inherit

var Player = require('../entities/player');
var Clickable = require('../entities/clickable');

var GameScreen = function() {
  this.player = null;
};

GameScreen.prototype = {
  initScreen: function() {
    this.points = extractPointsFromTileMapLayer(this.map.objects.points);
    this.clickables = extractClickablesFromTileMapLayer(this.map.objects.clickable_polygons);

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

    for(i in this.clickables) {
        var clickable = this.clickables[i];
        if(clickable.includesPoint(x, y)) {
            if(clickable.name == 'floor') {
                return this.player.moveTo(x, y);	
            }
            if(clickable.name == 'door') {
                return this.player.moveTo(x, this.player.y, function() {
                    var nextRoom = (playerState.currentLevel == 'BlueRoom') ? 'RedRoom' : 'BlueRoom'; 
                    this.game.state.start(nextRoom);
                });	
            }
        }
    }
  }
};

var extractPointsFromTileMapLayer = function(layer) {
	var points = [];
	for(i in layer) {
		points.push(layer[i]);
	}
	return points;
};

var extractClickablesFromTileMapLayer = function(layer) {
	var clickables = [];
	for(i in layer) {
		clickables.push(Clickable.create(layer[i]));
	}
	return clickables;
};

module.exports = GameScreen;
