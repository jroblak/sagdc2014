var Utils = {
    containsObject: function(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }

        return false;
    },

    localStorageSupported: function() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    },

    generateUUID: function(){
        var d = Date.now();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x7|0x8)).toString(16);
        });
        return uuid;
    },

    getObject: function(key, value) {
        var value = localStorage.getItem(key);
        return value && JSON.parse(value);
    },

    setObject: function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    extend: function (target, other) {
      for (var prop in other) {
        if (typeof other[prop] === 'object') {
          target[prop] = extend(target[prop], other[prop]);
        } else {
          target[prop] = other[prop];
        }
      }
      return target;
    }
};

module.exports = Utils;
