'use strict';

var create = require('../index').create;
var addonStable = require('../addon/stable').addon;
var addonNesting = require('../addon/nesting').addon;
var addonAtoms = require('../addon/atoms').addon;
var addonKeyframes = require('../addon/keyframes').addon;
var addonRule = require('../addon/rule').addon;
var addonSheet = require('../addon/sheet').addon;

exports.preset = function(config) {
    var nano = create(config);

    addonStable(nano);
    addonNesting(nano);
    addonAtoms(nano);
    addonKeyframes(nano);
    addonRule(nano);
    addonSheet(nano);

    return nano;
};
