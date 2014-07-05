Clickable = require('./clickable');

Floor = function(tiledObj) {
    Clickable.call(this, tiledObj);
}
Floor.prototype = Object.create(Clickable.prototype);

Floor.prototype.onClick = function(cursor, state) {
    state.player.moveTo(cursor.x, cursor.y);	
}

module.exports = Floor;
