'use strict';

var hash = require('./hash').hash;
var interpolateSelectors = require('./interpolateSelectors');

var KEBAB_REGEX = /[A-Z]/g;
var isClient = typeof window === 'object';

exports.create = function (h) {
    var renderer = {
        raw: '',
        cns: {},
        pfx: '_',
        cnt: 0
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
                prop = prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
                str += prop + ':' + value + ';';
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

        var key = hash(styles);

        if (!cache[key]) {
            cache[key] = renderer.rule(styles, key);
        }

        return cache[key];
    };

    renderer.rule = function(styles, block) {
        if (!block) {
            block = hash(styles);
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

    renderer.styled = function (fn, styles, dynamicTemplate, block) {
        var className;
        var isElement = typeof fn === 'string';

        if (!block && !isElement)
            block = fn.displayName || fn.name;

        var Component = function(props) {
            if (!className) {
                className = renderer.rule(styles, block);
            }

            var dynamicClassName = '';
            var dynamicStylesElement = null;

            if (dynamicTemplate) {
                dynamicClassName = renderer.pfx + (renderer.cnt++).toString(36);

                var dynamicStyles = dynamicTemplate(props);
                var rawCss = stringify(dynamicStyles, dynamicClassName);

                dynamicStylesElement = h('style', {
                    dangerouslySetInnerHTML: {__html: rawCss}
                });
            }

            if (process.env.NODE_ENV !== 'production') {
                return [
                    dynamicStylesElement,
                    h(fn, Object.assign({}, props, {className: (props.className || '') + className + dynamicClassName}))
                ];
            }

            props.className = (props.className || '') + className + dynamicClassName;

            return [
                dynamicStylesElement,
                isElement ? h(fn, props) : fn(props)
            ];
        };

        if (process.env.NODE_EVN !== 'production' && block) {
            Component.displayName = 'styled(' + block + ')';
        }

        return Component;
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

        if (block && (process.env.NODE_EVN !== 'production')) {
            Component.displayName = 'jsx(' + block + ')';
        }

        return Component;
    };

    return renderer;
};
