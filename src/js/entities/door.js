Clickable = require('./clickable');

Door = function(game, tiledObj) {
    Clickable.call(this, game, tiledObj);
}
Door.prototype = Object.create(Clickable.prototype);

Door.prototype.onClick = function(cursor, state) {
    var target = state.points[this.target];
    state.player.moveTo(target.x, target.y, function() {
        if(target.properties.nextSpawnPoint) {
            playerState.spawnPoint = target.properties.nextSpawnPoint;
        }
        state.game.state.start(target.properties.destination);
    });	
}

module.exports = Door;
