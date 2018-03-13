'use strict';

var hash = require('./hash').hash;
var interpolateSelectors = require('./interpolateSelectors');

var KEBAB_REGEX = /[A-Z]/g;
var isClient = typeof window === 'object';

exports.create = function (h) {
    var renderer = {
        h: h,
        raw: '',
        cns: {},
        pfx: '_',
        cnt: 0,
        hash: hash,
        decl: function (key, value) {
            key = key.replace(KEBAB_REGEX, '-$&').toLowerCase();
            return key + ':' + value + ';';
        }
    };

    var putRaw;

    if (isClient) {
        var sheet = document.head.appendChild(document.createElement('style')).sheet;
        putRaw = function (rawCss) {
            sheet.insertRule(rawCss, 0);
        };
    } else {
        putRaw = function (rawCss) {
            renderer.raw += rawCss;
        };
    }

    var put = function (selector, decls) {
        var selectors = selector.split(',');
        var str = '';
        var prop, value;

        for (prop in decls) {
            value = decls[prop];

            if (value instanceof Object) {
                var selectorInterpolated = interpolateSelectors(selectors, prop);
                put(selectorInterpolated, value);
            } else {
                str += renderer.decl(prop, value);
            }
        }

        if (str) {
            str = '.' + selector + '{' + str + '}';
            putRaw(str);
        }
    };

    var cache = {};

    var fromCache = function (styles) {
        if (!styles) return '';

        var key = renderer.hash(styles);

        if (!cache[key]) {
            cache[key] = renderer.rule(styles, key);
        }

        return cache[key];
    };

    renderer.rule = function(styles, block) {
        if (!block) {
            block = renderer.hash(styles);
        }

        if (isClient) {
            if (process.env.NODE_ENV !== 'production') {
                if (isClient) {
                    /*
                    if (document.getElementById('css-' + block)) {
                        console.error(
                            'ezcss detected class name collision "css-' + block + '". ' +
                                'Multiple components use the same class name.'
                        );
                    }
                    */
                }
            }

            if (renderer.cns[block]) {
                if (process.env.NODE_ENV !== 'production') {
                    // eslint-disable-next-line
                    console.info('Hydration cache hit: "' + block + '"');
                }

                return;
            }
        }

        block = renderer.pfx + block;
        put(block, styles);
        renderer.cns[block] = 1;

        return ' ' + block;
    };

    renderer.jsx = function (fn, styles, block) {
        var className;
        var isElement = typeof fn === 'string';

        if (!block && !isElement)
            block = fn.displayName || fn.name;

        var Component = function (props) {
            if (!className) {
                className = renderer.rule(styles, block);
            }

            var copy = props;

            if (process.env.NODE_ENV !== 'production') {
                copy = Object.assign({}, props);
            }

            var dynamicClassName = fromCache(props.css);
            delete copy.css;

            copy.className = (props.className || '') + className + dynamicClassName;

            return isElement ? h(fn, copy) : fn(copy);
        };

        if (process.env.NODE_EVN !== 'production') {
            if (block) {
                Component.displayName = 'jsx(' + block + ')';
            }
        }

        return Component;
    };

    return renderer;
};
