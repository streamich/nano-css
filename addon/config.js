'use strict';

var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var hash = 5381, i = str.length;

    while (i) hash = (hash * 33) ^ str.charCodeAt(--i);

    return '_' + (hash >>> 0).toString(36);
};

exports.addon = function (renderer, config) {
    config = config || {};
    var extend = config.extend || Object.assign;

    extend(renderer, {
        raw: '',
        cns: {},
        pfx: '_',
        client: typeof window === 'object',
        extend: extend,
        stringify: JSON.stringify,
        decl: function (key, value) {
            key = key.replace(KEBAB_REGEX, '-$&').toLowerCase();
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
    }, config);
};
