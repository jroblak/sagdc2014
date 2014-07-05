Clickable = require('./clickable');

Door = function(tiledObj) {
    Clickable.call(this, tiledObj);
}
Door.prototype = Object.create(Clickable.prototype);

Door.prototype.onClick = function(cursor, state) {
    var target = state.points[this.target];
    return state.player.moveTo(target.x, target.y, function() {
        state.game.state.start(target.name);
    });	
}

module.exports = Door;
