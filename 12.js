'use strict';


function Spy(target, method) {
    var original = target[method];
    var self = this;

    this.count = 0;

    target[method] = function() {
        ++self.count;
        return original.apply(target, arguments);
    }
}

module.exports = Spy
