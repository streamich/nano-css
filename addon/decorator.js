'use strict';

var cloneElement = require('react').cloneElement;

exports.addon = function (renderer) {
    var transformStatic = function (fn, styles, block) {
        block = block || fn.displayName || fn.name;

        var render_ = fn.prototype.render;
        var className = '';

        fn.prototype.render = function() {
            var element = render_.call(this);

            if (element) {
                if (!className) {
                    className = renderer.rule(styles, block);
                }

                if (process.env.NODE_ENV === 'production') {
                    element.props.className = (element.props.className || '') + className;
                } else {
                    element = cloneElement(element, {
                        className: (element.props.className || '') + className,
                    });
                }
            }

            return element;
        };
    };

    renderer.css = function (a, b) {
        return function (Klass) {
            transformStatic(Klass, a, b);
        };
    };
};
