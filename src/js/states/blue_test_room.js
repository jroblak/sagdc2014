var GameScreen = require('../states/game_screen');

var BlueRoom = function() {
    this.map = null;
};

BlueRoom.prototype = new GameScreen();
BlueRoom.prototype.create = function() {
    playerState.currentLevel = 'BlueRoom';

    var bg = this.game.add.image(0, 0, 'blue_room');

    this.map = this.game.add.tilemap('blue_room');

    this.initScreen();

    //overriding the default behavior of the lightSwitch
    this.clickables.lightSwitch.onClick = function(cursor, state){
        var player = state.player;
        player.moveTo(this.x, this.y + (player.height * .75 ), function() {
            console.log('LIGHTS OUT, MOTHERFUCKER');
        });
    };
};

module.exports = BlueRoom;
