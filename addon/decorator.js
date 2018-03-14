'use strict';

var cloneElement = require('react').cloneElement;

exports.addon = function (renderer) {
    var transformStatic = function (prototype, styles, block) {
        var render_ = prototype.render;
        var className = '';

        prototype.render = function() {
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

    /*
    var transformDynamic = function (prototype, dynamicTemplate) {
        var render_ = prototype.render;

        prototype.render = function () {
            var element = render_.apply(this, arguments);
            var props = element.props;
            var className =
                (props.className || '') +
                renderer.render(this.constructor, this, this[$$el], dynamicTemplate(this));

            if (process.env.NODE_ENV === 'production') {
                element.ref = ref;
                props.className = className;
                return element;
            }

            return cloneElement(element, Object.assign({}, props, {ref: ref, className: className}), props.children);
        };
    };
    */

    renderer.css = function (a, b) {
        return function (Klass) {
            var block = b || Klass.displayName || Klass.name;
            var prototype = Klass.prototype;

            transformStatic(prototype, a, block);
        };
    };
};
