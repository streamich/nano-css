'use strict';

exports.addon = function (renderer) {
    var decl = renderer.decl;

    renderer.decl = function (prop, value) {
        return decl(prop, value).replace(/;/g, ' !important;');
    };
};
