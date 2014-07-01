var RedRoom = function () {
  this.player = null;
};

module.exports = RedRoom;

RedRoom.prototype = {

  create: function () {
    var x = (this.game.width / 2) - 100;
    var y = (this.game.height / 2) - 50;

    this.player = new Player(this.game, x, y);
  },

  update: function () {
  }
};
