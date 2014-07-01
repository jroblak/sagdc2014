var game = new Phaser.Game(800, 600, Phaser.AUTO, 'sagdc-game');
var Player = require('./entities/player');

game.state.add('Boot', require('./states/boot'));
game.state.add('Splash', require('./states/splash'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('Menu', require('./states/menu'));
game.state.add('Game', require('./states/game'));
game.state.add('RedRoom', require('./states/red_test_room'));
game.state.add('RedRoom', require('./states/blue_test_room'));

game.state.start('Boot');
