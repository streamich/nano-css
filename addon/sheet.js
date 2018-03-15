'use strict';

var addonRule = require('./rule').addon;

exports.addon = function (renderer) {
    if (!renderer.rule) {
        addonRule(renderer);
    }

    renderer.sheet = function (map, block) {
        var result = {};

        if (!block) {
            block = renderer.hash(map);
        }

        var onElementModifier = function (elementModifier) {
            var styles = map[elementModifier];

            Object.defineProperty(result, elementModifier, {
                configurable: true,
                get: function () {
                    var classNames = renderer.rule(styles, block + '-' + elementModifier);

                    Object.defineProperty(result, elementModifier, {
                        value: classNames
                    });

                    return classNames;
                },
            });
        };

        for (var elementModifier in map) {
            onElementModifier(elementModifier);
        }

        return result;
    };
};
