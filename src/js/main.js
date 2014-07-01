'use strict';

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'sagdc-game');

window.Utils = require('./utils');
window.playerState = {
    UUID: '',
    inventory: [], 	     // List of Item
    currentlyEquipped: null, // Item
    currentLevel: 'Game'
}

if (Utils.localStorageSupported()) {
     if (localStorage['playerState'] !== undefined) {
        playerState = Utils.getObject('playerState');
    } else {
        playerState.UUID = Utils.generateUUID();   
        Utils.setObject('playerState', playerState);
    }
} else {
    alert("Local storage not supported - you cannot save!");
}

game.state.add('Boot', require('./states/boot'));
game.state.add('Splash', require('./states/splash'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('Menu', require('./states/menu'));
game.state.add('Game', require('./states/game'));

game.state.start('Boot');
