'use strict';

var stringify = require('fastest-stable-stringify');

exports.hash = function(styles) {
    var str = stringify(styles);
    var hash = 5381,
        i = str.length;

    while (i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
    }

    return '_' + (hash >>> 0);
};
