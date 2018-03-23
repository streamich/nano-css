'use strict';

var validateString = require('csstree-validator').validateString;

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('validate', renderer, ['putRaw']);
    }

    if (process.env.NODE_ENV === 'production') {
        console.warn(
            'You are using nano-css "validate" in production. ' +
            'This addon is suggested to be used only in development.'
        );
    }

    var putRaw = renderer.putRaw;

    renderer.putRaw = function (rawCssRule) {
        var errors = validateString(rawCssRule)['<unknown>'];

        if (errors.length) {
            errors.forEach(function (error) {
                console.error('Error in CSS: ' + error.message);
                console.error(error);
                // eslint-disable-next-line
                console.log(rawCssRule);
            });
        }

        putRaw(rawCssRule);
    };
};
