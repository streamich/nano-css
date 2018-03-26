'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('cssom', renderer, ['sh']);
    }

    renderer.putRule = function (selector) {
        var rawCss = selector + '{}';
        var sheet = renderer.sh.sheet;
        var index = sheet.insertRule(rawCss, 0);
        var rule = (sheet.cssRules || sheet.rules)[index];
        var result = {
            remove: function () {}
        };

        result.index = index;
        result.rule = rule;
        result.style = rule.style;

        return result;
    };

    // renderer.putAtRule = function (prelude) {
    //     return renderer.putRule(prelude);
    // };
};
