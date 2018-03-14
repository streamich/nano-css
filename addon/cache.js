'use strict';

exports.addon = function (renderer) {
    var cache = {};

    renderer.cache = function (styles) {
        if (!styles) return '';

        var key = renderer.hash(styles);

        if (!cache[key]) {
            cache[key] = renderer.rule(styles, key);
        }

        return cache[key];
    };
};
