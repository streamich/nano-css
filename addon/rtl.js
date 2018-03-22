'use strict';

var flip = require('rtl-css-js')

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('rtl', renderer, ['put']);
    }

    var put = renderer.put;

    renderer.put = function (selector, css) {
        return put(selector, flip(css));
    };
};
