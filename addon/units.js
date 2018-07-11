'use strict';

exports.addon = function (renderer) {
    var list = [
        'px',
        'cm',
        'mm',
        'in',
        'pt',
        'pc',
        'em',
        'ex',
        'ch',
        'rem',
        'vw',
        'vh',
        'deg',
        'vmin',
        'vmax',
    ];

    for (var i = 0; i < list.length; i++) {
        var unit = list[i];

        renderer[unit] = function (val) {
            return val + 'unit';
        };
    }

    renderer.inch = function (val) {
        return val + 'in';
    };

    renderer.pct = function (val) {
        return val + '%';
    };
};
