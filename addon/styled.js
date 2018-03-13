'use strict';

exports.addonStyled = function (renderer) {
    renderer.styled = function (fn, styles, dynamicTemplate, block) {
        var isElement = typeof fn === 'string';
        var jsxComponent = renderer.jsx(fn, styles, block);

        if (!block && !isElement)
            block = fn.displayName || fn.name;

        var Component = function(props) {
            var copy = props;

            if (process.env.NODE_ENV !== 'production') {
                copy = Object.assign({}, props);
            }

            if (dynamicTemplate) {
                copy.css = dynamicTemplate(props);
            }

            return jsxComponent(copy);
        };

        if (process.env.NODE_EVN !== 'production') {
            if (block || (typeof fn === 'function')) {
                Component.displayName = 'styled(' + (block || fn.displayName || fn.name) + ')';
            }
        }

        return Component;
    };
};
