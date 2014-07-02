var Item = require('../item');

var SpecificItem = function (game, x, y) {
    Item.call(this, game, x, y, 'specificitem');
};

SpecificItem.prototype = Object.create(Item.prototype);
SpecificItem.prototype.constructor = SpecificItem;

SpecificItem.prototype.onUse = function (arg1, arg2) {
  // ...
};

module.exports = SpecificItem