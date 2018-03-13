'use strict';

exports.addonStyled = function (renderer) {
    renderer.styled = function (fn, styles, dynamicTemplate, block) {
        var jsxComponent = renderer.jsx(fn, styles, block);

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
