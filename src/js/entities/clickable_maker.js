/*
This serves as a registry so the game_screen can automatically make objects
out of what it finds in the Tiled maps.
*/

var clickables = {
    Door: require('./door'),
    Floor: require('./floor'),
    LightSwitch: require('./light_switch'),
};

module.exports.create = function(game, tiledObj) {
    try {
        if(!tiledObj.properties.class) { tiledObj.properties.class = tiledObj.name; }
        var klass = tiledObj.properties.class;
        if(clickables[klass]) {
            return new clickables[klass](game, tiledObj);
        } else {
            throw 'clickable undefined';
        }
    } catch(err) {
        console.log(err + ': ', tiledObj.name);
        return undefined;
    }
};
