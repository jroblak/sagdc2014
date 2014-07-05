//This serves as a registry so the game_screen can automatically make objects
//out of what it finds in the Tiled maps.

var clickables = {
    door: require('./door'),
    floor: require('./floor'),
};

module.exports.create = function(tiledObj) {
    try {
        if(clickables[tiledObj.name]) {
            return new clickables[tiledObj.name](tiledObj);
        } else {
            throw 'clickable undefined';
        }
    } catch(err) {
        console.log(err + ': ', tiledObj.name);
        return undefined;
    }
};
