'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('rule', renderer, ['put']);
    }

    renderer.rule = function (css, block) {
        if (process.env.NODE_ENV === 'production') {
            block = renderer.hash(css);
        } else {
            block = (block || '') + '_' + renderer.hash(css);
        }
        renderer.put('.' + renderer.pfx + block, css);

        return ' ' + block;
    };
};
