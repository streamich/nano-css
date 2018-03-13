'use strict';

var h = require('react').createElement;
var toCss = require('./ast').toCss;
var hoistGlobalsAndWrapContext = require('./hoistGlobalsAndWrapContext');
var hash = require('./hash').hash;

function stringify(styles, block) {
    return toCss(hoistGlobalsAndWrapContext(styles, '.' + block));
}

var isClient = typeof window === 'object';

exports.create = function () {
    var renderer = {
        raw: '',
        cns: {},
        pfx: ' _',
        cnt: 0
    };

    renderer.rule = function(styles, block) {
        if (!block) {
            block = hash(styles);
        }

        var rawCss = stringify(styles, block);

        if (isClient) {
            if (process.env.NODE_ENV !== 'production') {
                if (isClient) {
                    if (document.getElementById('css-' + block)) {
                        console.error(
                            'ezcss detected class name collision "css-' + block + '". ' +
                                'Multiple components use the same class name.'
                        );
                    }
                }
            }

            if (this.cns[block]) {
                if (process.env.NODE_ENV !== 'production') {
                    // eslint-disable-next-line
                    console.log('Hydration cache hit: "' + block + '"');
                }

                return;
            }

            var el= document.createElement('style');

            document.head.appendChild(el);

            if (process.env.NODE_ENV !== 'production') {
                if (isClient) {
                    el.id = 'css-' + block;
                }
            }

            el.appendChild(document.createTextNode(rawCss));
        } else {
            this.raw += rawCss;
        }

        this.cns[block] = 1;

        return ' ' + block;
    };

    renderer.styled = function (fn, styles, dynamicTemplate, block) {
        var className;
        var isElement = typeof fn === 'string';

        var Component = function(props) {
            if (!className) {
                className = this.rule(styles, block);
            }

            var dynamicClassName = '';
            var dynamicStylesElement = null;

            if (dynamicTemplate) {
                dynamicClassName = this.pfx + (this.cnt++).toString(36);

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
};
