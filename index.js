'use strict';

var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var hash = 5381, i = str.length;

    while (i) hash = (hash * 33) ^ str.charCodeAt(--i);

    return '_' + (hash >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;

    var renderer = assign({
        raw: '',
        cns: {},
        pfx: '_',
        client: typeof window === 'object',
        assign: assign,
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

    var putRaw;

    if (renderer.client) {
        var sheet = document.head.appendChild(document.createElement('style')).sheet;
        putRaw = function (rawCss) {
            sheet.insertRule(rawCss, 0);
        };
    } else {
        putRaw = function (rawCss) {
            renderer.raw += rawCss;
        };
    }

    var put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;

        for (prop in decls) {
            value = decls[prop];

            if (value instanceof Object) {
                if (prop[0] === '@') {
                    put(selector, value, prop);
                } else {
                    put(renderer.selector(selector, prop), value, atrule);
                }
            } else {
                str += renderer.decl(prop, value);
            }
        }

        if (str) {
            str = '.' + selector + '{' + str + '}';
            putRaw(atrule ? atrule + '{' + str + '}' : str);
        }
    };

    renderer.put = put;

    return renderer;
};
