'use strict';

var prefixAll = require('inline-style-prefixer/static');

var CAMEL_REGEX = /-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;

var matchCallback = function (match) {
    return match.slice(1).toUpperCase();
};

exports.addon = function (renderer) {
    var decl = renderer.decl;

    renderer.camel = function (prop) {
        return prop.replace(CAMEL_REGEX, matchCallback);
    };

    renderer.prefix = function (prop, value) {
        var obj = {};
        obj[renderer.camel(prop)] = value;
        obj = prefixAll(obj);

        var str = '';

        for (var propPrefixed in obj) {
            value = obj[propPrefixed];
            propPrefixed = renderer.kebab(propPrefixed);

            if (value instanceof Array) {
                str += propPrefixed + ':' + value.join(';' + propPrefixed + ':') + ';';
            } else {
                str += propPrefixed + ':' + value + ';';
            }
        }

        return str;
    };

    renderer.decl = function (prop, value) {
        var str = decl(prop, value);
        var declarations = str.split(';');

        if (!declarations.length) {
            return str;
        }

        var prefixed = '';

        for (var i = 0; i < declarations.length; i++) {
            var declaration = declarations[i];

            if (declaration) {
                var pos = declaration.indexOf(':');

                prefixed += renderer.prefix(declaration.substr(0, pos), declaration.substr(pos + 1));
            }
        }

        return prefixed;
    };
};
