'use strict';

var addonCache = require('./cache').addon;

exports.addon = function (renderer) {
    if (!renderer.cache) {
        addonCache(renderer);
    }

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

            var dynamicClassName = renderer.cache(props.css);
            delete copy.css;

            copy.className = (props.className || '') + className + dynamicClassName;

            return isElement ? renderer.h(fn, copy) : fn(copy);
        };

        if (process.env.NODE_EVN !== 'production') {
            if (block) {
                Component.displayName = 'jsx(' + block + ')';
            }
        }

        return Component;
    };
};
