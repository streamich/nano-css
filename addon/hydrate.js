'use strict';

exports.addon = function (renderer, id) {
    id = id || 'nano-css';

    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('hydrate', renderer, ['put']);
    }

    if (renderer.client) {
        var hydrated = {};
        var stylesheet = document.getElementById(id);

        if (!stylesheet) {
            if (process.env.NODE_ENV !== 'production') {
                console.error('Hydration stylesheet with id "' + id + '" was not found.');
            }

            return;
        }

        var cssRules = stylesheet.cssRules;

        for (var i = 0; i < cssRules.length; i++) {
            var rule = cssRules[i];
            hydrated[rule.selectorText] = 1;
        }

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
