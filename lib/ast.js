'use strict';

var interpolateSelectors = require('./interpolateSelectors');

var KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
var KEBAB_MATCHER = function(match) { return '-' + match.toLowerCase(); };

function kebabCase(str) {
    return str.replace(KEBAB_REGEX, KEBAB_MATCHER);
}

exports.toCss = function toCss (pojso) {
    var str = '';

    for (var selector in pojso) {
        var values = pojso[selector];

        // Atrule: @media, @keyframe, ...
        if (selector[0] === '@') {
            str += selector + '{' + toCss(values) + '}';
        } else {
            var selectors = selector.split(',');
            var declarations = '';

            for (var prop in values) {
                var value = values[prop];

                switch (typeof value) {
                case 'string':
                case 'number':
                    prop = kebabCase(prop);
                    declarations += prop + ':' + value + ';';
                    break;
                case 'object': {
                    var selectorsInterpolated = interpolateSelectors(selectors, prop);
                    var obj = {};
                    obj[selectorsInterpolated] = value;
                    str += toCss(obj);
                    break;
                }
                }
            }
            str += selectors + '{' + declarations + '}';
        }
    }

    return str;
};
