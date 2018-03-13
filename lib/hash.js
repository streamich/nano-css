'use strict';

exports.hash = function(str) {
    var hash = 5381,
        i = str.length;

    while (i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
    }

    return '_' + (hash >>> 0).toString(36);
};
