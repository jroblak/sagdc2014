
CursorText = function(game) {
    this.cursor = game.input.mousePointer;
    this.offset = 20;

    var style = { 
        font: "17px Arial",
        fill: "#fff",
        align: "center",
        strokeThickness: 2
    };
    this.text = game.add.text(this.cursor.x, this.cursor.y, '', style);
    this.text.update = updatePosition(this.cursor, this.offset);
    this.timer = game.time.create(false);
}


CursorText.prototype.startMessage = function(message, time) {
    time = time || 1000;
    this.text.text = message;
    if (this.timer.running) {
        this.timer.stop();
    }
    this.timer.add(time, this.endMessage, this);
    this.timer.start();
};
CursorText.prototype.endMessage = function() {
    this.text.text = '';
    this.timer.stop();
};
var updatePosition = function(cursor, offset) {
   return function() {
       this.position.x = cursor.x + offset;
       this.position.y = cursor.y - offset;
   }
};


module.exports = CursorText;

