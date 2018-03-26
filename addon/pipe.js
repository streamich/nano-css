'use strict';

var addonCssom = require('./cssom').addon;

exports.addon = function (renderer) {
    if (!renderer.putRule) {
        addonCssom(renderer);
    }

    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('pipe', renderer, ['putRule']);
    }

    renderer.pipe = function (initialDecls) {
        var className = 'a';
        var rule = renderer.putRule('.' + className);

        for (var prop in initialDecls) {
            rule.style.setProperty(prop, initialDecls[prop]);
        }

        var closure = function (decls) {
            for (var prop in decls) {
                rule.style.setProperty(prop, decls[prop]);
            }

            return ' ' + className;
        };

        return closure;
    };
};
