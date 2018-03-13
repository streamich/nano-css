'use strict';

var hash = require('../lib/hash').hash;

exports.addonSheet = function (renderer) {
    renderer.sheet = function (map, block) {
        var result = {};

        if (!block) {
            block = hash(map);
        }

        for (var elementModifier in map) {
            var styles = map[elementModifier];

            Object.defineProperty(result, elementModifier, {
                configurable: true,
                get: function () {
                    var classNames = this.rule(styles, block + '-' + elementModifier);

                    Object.defineProperty(result, elementModifier, {
                        value: classNames,
                    });

                    return classNames;
                },
            });
        }

        return result;
    };
};
