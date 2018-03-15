'use strict';

var addonConfig = require('./addon/config').addon;
var addonPut = require('./addon/put').addon;

exports.create = function (config) {
    var renderer = {};

    addonConfig(renderer, config);
    addonPut(renderer);

    return renderer;
};
