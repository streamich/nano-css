'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('dsheet', renderer, ['sheet', 'cache']);
    }

    renderer.dsheet = function (map, block) {
        var styles = renderer.sheet(map, block);
        var closures = {};

        var createClosure = function (modifier) {
            var closure = function (dynamicStyles) {
                if (!dynamicStyles) {
                    return styles[modifier];
                }

                var dynamicClassName = renderer.cache(dynamicStyles);

                return styles[modifier] + dynamicClassName;
            };

            closure.toString = function () {
                return styles[modifier];
            };

            return closure;
        };

        for (var modifier in map) {
            closures[modifier] = createClosure(modifier);
        }

        return closures;
    };
};
