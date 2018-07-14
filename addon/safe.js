'use strict';

exports.addon = function (renderer, options) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('safe', renderer, ['putRaw']);
    }

    options = options || {};

    if (renderer.client) {
        var putRaw = renderer.putRaw;

        renderer.putRaw = function () {
            try {
                putRaw.apply(null, arguments);
            // eslint-disable-next-line no-empty
            } catch (error) {
                if (process.env.NODE_ENV !== 'production') {
                    if (!options.quiet) {
                        console.error(error);
                    }
                }
            }
        };
    }
};
