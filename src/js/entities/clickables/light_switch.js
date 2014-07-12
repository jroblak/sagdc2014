Clickable = require('../clickable');

LightSwitch = function(game, tiledObj) {
    Clickable.call(this, game, tiledObj);
}
LightSwitch.prototype = Object.create(Clickable.prototype);

LightSwitch.prototype.onClick = function(cursor, state) {
    console.log('LIGHT SWITCH');
    image.events.onInputOver.add(over, this);
    image.events.onInputOut.add(out, this);
}

module.exports = LightSwitch;
