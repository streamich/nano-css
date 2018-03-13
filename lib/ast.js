'use strict';

var interpolateSelectors = require('./interpolateSelectors');

var KEBAB_REGEX = /[A-Z]/g;

function onDecls (selector, decls) {
    var selectors = selector.split(',');
    var str = '', strDecls = '';
    var prop, value;

    for (prop in decls) {
        value = decls[prop];

        if (value instanceof Object) {
            var selectorsInterpolated = interpolateSelectors(selectors, prop);
            str += onDecls(selectorsInterpolated, value);
        } else {
            prop = prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
            strDecls += prop + ':' + value + ';';
        }
    }

    return str + selector + '{' + strDecls + '}';
}

function onStyles (styles) {
    var str = '', selector;

    for (selector in styles) {
        if (selector[0] === '@') {
            str += selector + '{' + onStyles(styles[selector]) + '}';
        } else {
            str += onDecls(selector, styles[selector]);
        }
    }

    return str;
}

exports.onDecls = onDecls;
exports.onStyles = onStyles;
