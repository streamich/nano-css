'use strict';

var units = {};
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

function f (unit, val) {
    return val + unit;
}

for (var i = 0; i < list.length; i++) {
    var unit = list[i];

    units[unit] = f.bind(null, unit);
}

units.inch = function (val) {
    return val + 'in';
};

units.pct = function (val) {
    return val + '%';
};

exports.addon = function (renderer) {
    renderer.assign(renderer, units);
    renderer.units = units;
};
