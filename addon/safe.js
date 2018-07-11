'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('safe', renderer, ['putRaw']);
    }

    if (renderer.client) {
        var putRaw = renderer.putRaw;

        renderer.putRaw = function () {
            try {
                putRaw.apply(null, arguments);
            // eslint-disable-next-line no-empty
            } catch (error) {
                console.error(error);
            }
        };
    }
};
