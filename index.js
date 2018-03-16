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
        putRaw: function (rawCssRule) {
            renderer.raw += rawCssRule;
        },
        putAtrule: function (selector, decls, prelude) {
            renderer.put(selector, decls, prelude);
        }
    }, config);

    var sheet, stylesheet;

    if (renderer.client) {
        if (process.env.NODE_ENV === 'production') {
            sheet = document.head.appendChild(document.createElement('style')).sheet;
        } else {
            stylesheet = document.createElement('style');
            document.head.appendChild(stylesheet);
        }

        renderer.putRaw = function (rawCssRule) {
            if (process.env.NODE_ENV === 'production') {
                sheet.insertRule(rawCssRule, 0);
            } else {
                try {
                    stylesheet.sheet.insertRule(rawCssRule, 0);
                } catch (error) {
                    // eslint-disable-next-line
                    console.info('Could not insert CSS rule.');
                    console.error(error);

                    stylesheet.appendChild(document.createTextNode(rawCssRule));
                }
            }
        };
    }

    renderer.put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;

        for (prop in decls) {
            value = decls[prop];

            if ((value instanceof Object) && !(value instanceof Array)) {
                if (prop[0] === '@') {
                    renderer.putAtrule(selector, value, prop);
                } else {
                    renderer.put(renderer.selector(selector, prop), value, atrule);
                }
            } else {
                str += renderer.decl(prop, value);
            }
        }

        if (str) {
            str = selector + '{' + str + '}';
            renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }
    };

    return renderer;
};
