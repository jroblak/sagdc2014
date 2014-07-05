//main game screen that the various scenes will inherit

var Player = require('../entities/player');
var ClickableMaker = require('../entities/clickable_maker');

var GameScreen = function() {
  this.player = null;
};

GameScreen.prototype = {
  initScreen: function() {
    this.points = extractPointsFromTileMapLayer(this.map.objects.points);
    this.clickables = extractClickablesFromTileMapLayer(this.map.objects.clickables);
    
    if(playerState.spawnPoint && this.points[playerState.spawnPoint]) {
        var point = this.points[playerState.spawnPoint];
        var x = point.x;
        var y = point.y;
    } else {
        var x = (this.game.width / 2);
        var y = (this.game.height / 2) + 250;
    }
    this.player = new Player(this.game, x, y);

    this.input.onDown.add(this.onInputDown, this);
  },

  update: function () {
  },

  onInputDown: function(cursor) {
    for(i in this.clickables) {
        var clickable = this.clickables[i];
        if(clickable.includesPoint(cursor.x, cursor.y)) {
            clickable.click(cursor, this);
        }
    }
  }
};

var extractPointsFromTileMapLayer = function(layer) {
	var points = {};
	for(i in layer) {
        point = layer[i];
		points[point.name] = point;
	}
	return points;
};

var extractClickablesFromTileMapLayer = function(layer) {
	var clickables = {};
	for(i in layer) {
        var clickable = ClickableMaker.create(layer[i]);
		if(clickable) { clickables[clickable.name] = clickable; }
	}
	return clickables;
};

module.exports = GameScreen;
