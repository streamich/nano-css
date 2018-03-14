'use strict';

exports.addon = function (renderer) {
    renderer.useStyles = function (map, fn, block) {
        block = block || fn.displayName || fn.name;

        var styles = renderer.sheet(map, block);
        var Component = function (props) {
            return fn(props, styles);
        };

        if (process.env.NODE_ENV !== 'production') {
            if (block) {
                Component.displayName = 'useStyles(' + block + ')';
            }
        }

        return Component;
    };
};
