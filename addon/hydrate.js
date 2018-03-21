'use strict';

exports.addon = function (renderer, stylesheet) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('hydrate', renderer, ['put']);
    }

    if (renderer.client) {
        var hydrated = {};
        stylesheet = stylesheet || renderer.sh;

        if (!stylesheet) {
            if (process.env.NODE_ENV !== 'production') {
                console.error('Hydration style sheet was not found.');
            }

            return;
        }

        var cssRules = stylesheet.cssRules;

        for (var i = 0; i < cssRules.length; i++)
            hydrated[cssRules[i].selectorText] = 1;

        var put = renderer.put;

        renderer.put = function (selector, css) {
            if (selector in hydrated) {
                if (process.env.NODE_ENV !== 'production') {
                    // eslint-disable-next-line
                    console.info('Hydrated selector: ' + selector);
                }

                return;
            }

            put(selector, css);
        };
    }
};
