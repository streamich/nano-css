'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('sheet', renderer, ['rule']);
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
