'use strict';

var addonLimit = require('./limit').addon;

// Banned CSS declaration property names, for security reasons.
var banned = [
    'behavior',
    '-moz-binding',
];

var warnOnImportant = function (renderer) {
    var putRaw = renderer.putRaw;

    renderer.putRaw = function (rawCssRule) {
        if (rawCssRule.indexOf('!important') > -1) {
            console.error(
                '!important modifier is not allowed in AMP apps. ' +
                'Detected !important modifier in below CSS rule. ' +
                rawCssRule
            );
        }

        return putRaw(rawCssRule);
    };
};

var removeImportant = function (renderer) {
    var putRaw = renderer.putRaw;

    renderer.putRaw = function (rawCssRule) {
        rawCssRule = rawCssRule.replace(/!important/g, '');

        return putRaw(rawCssRule);
    };
};

var warnOnBanned = function (renderer) {
    var decl = renderer.decl;

    renderer.decl = function (prop, value) {
        if (banned.indexOf(renderer.kebab(prop)) > -1) {

            console.error(
                'Detected banned CSS prop, "' + prop + '" is not allowed in AMP apps.'
            );
        }

        return decl(prop, value);
    };
};

var removeBanned = function (renderer) {
    var decl = renderer.decl;

    renderer.decl = function (prop, value) {
        if (banned.indexOf(renderer.kebab(prop)) > -1) {

            return '';
        }

        return decl(prop, value);
    };
};

exports.addon = function (renderer, config) {
    config = config || {};

    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('limit', renderer, ['putRaw']);
    }

    if (renderer.client) return;

    // Enforce max style sheet size.
    addonLimit(renderer, config.limit || 50000);

    // Warn on `!important` specifiers, which are not allowed.
    if (process.env.NODE_ENV !== 'production') {
        warnOnImportant(renderer);
    }

    // Remove all !important modifiers.
    if (config.removeImportant) {
        removeImportant(renderer);
    }

    // Warn on banned CSS properties.
    if (process.env.NODE_ENV !== 'production') {
        warnOnBanned(renderer);
    }

    // Warn on banned CSS properties.
    if (config.removeBanned) {
        removeBanned(renderer);
    }
};
