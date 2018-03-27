'use strict';

var addonCssom = require('./cssom').addon;

exports.addon = function (renderer) {
    if (!renderer.putRule) {
        addonCssom(renderer);
    }

    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('pipe', renderer, ['putRule']);
    }

    var counter = 0;

    renderer.pipe = function () {
        var rules = {};
        var className = renderer.pfx + 'pipe-' + (counter++).toString(36);
        var attr = 'data-' + className;
        var scope1 = '.' + className;
        var scope2 = '[' + attr + ']';

        var obj = {
            attr: attr,
            className: className,
            css: function (css) {
                for (var selectorTemplate in css) {
                    var declarations = css[selectorTemplate];
                    var rule = rules[selectorTemplate];

                    if (!rule) {
                        var selector = selectorTemplate.replace('&', scope1) + ',' + selectorTemplate.replace('&', scope2);

                        rules[selectorTemplate] = rule = renderer.putRule(selector);
                    }

                    for (var prop in declarations)
                        rule.style.setProperty(prop, declarations[prop]);
                }
            },
            remove: function () {
                for (var selectorTemplate in rules)
                    rules[selectorTemplate].remove();
            }
        };

        return obj;
    };
};
