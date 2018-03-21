'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('styled', renderer, ['putRaw']);
    }

    if (process.env.NODE_ENV !== 'production') {
        // Check we have a style sheet to hydrate.
        if (!renderer.sh) {
            console.warn(
                '"virtual-hydrate" addon expected a style sheet in "sh" property, ' +
                'but could not find one. Will not re-hydrate.'
            );
        }

        if ((typeof renderer.atomic !== 'function') || (typeof renderer.virtual !== 'function') || (typeof renderer.memo !== 'object')) {
            console.error(
                '"virtual-hydrate" requires "virtual" addon bot be installed, but it was not found.'
            );
        }
    }

    if (!renderer.sh) return;

    var rules = renderer.sh.sheet.cssRules || renderer.sh.sheet.rules;
    var length = rules.length;
    var cache = {};

    for (var i = 0; i < length; i++) {
        var rule = rules[i];

        var atrule = '_';
        var selector = rule.selectorText;
        var prop = rule.style[0];
        var value = rule.style[prop];

        if (!cache[atrule]) {
            cache[atrule] = {};
        }

        if (!cache[atrule][selector]) {
            // TO BO IMPLEMENTED... (maybe)
            // The thing is, it is not possible to hydrate arbitrary selectors.
            // - .a .b .c:hover { ... }
            // - & .b .c:hover { ... }
            // - .a & .c:hover { ... }
            // - .a .b &:hover { ... }
        }
    }
};
