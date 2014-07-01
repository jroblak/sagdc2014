var game = new Phaser.Game(800, 600, Phaser.AUTO, 'sagdc-game');

var Utils = require('./utils');

var Player = require('./entities/player');
var SpecificItem = require('./entities/items/specificitem');

var playerState = {
    UUID: '',
	inventory: [], 		// List of Item
	currentlyEquipped: null // Item
};

if (Utils.localStorageSupported()) {
    if (localStorage['playerState'] !== 'undefined') {
        playerState = localStorage.getItem('playerState');
        // TODO: State setup
    } else {
        playerState.UUID = Utils.generateUUID();   
        localStorage['playerState'] = playerState;
    }
}

game.state.add('Boot', require('./states/boot'));
game.state.add('Splash', require('./states/splash'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('Menu', require('./states/menu'));
game.state.add('Game', require('./states/game'));

game.state.start('Boot');
