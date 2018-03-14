'use strict';

exports.addon = function (renderer) {
    var putRaw;

    if (renderer.client) {
        var sheet = document.head.appendChild(document.createElement('style')).sheet;
        putRaw = function (rawCss) {
            sheet.insertRule(rawCss, 0);
        };
    } else {
        putRaw = function (rawCss) {
            renderer.raw += rawCss;
        };
    }

    var put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;

        for (prop in decls) {
            value = decls[prop];

            if (value instanceof Object) {
                if (prop[0] === '@') {
                    put(selector, value, prop);
                } else {
                    put(renderer.selector(selector, prop), value, atrule);
                }
            } else {
                str += renderer.decl(prop, value);
            }
        }

        if (str) {
            str = '.' + selector + '{' + str + '}';
            putRaw(atrule ? atrule + '{' + str + '}' : str);
        }
    };

    renderer.put = put;
};
