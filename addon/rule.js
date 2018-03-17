'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('rule', renderer, ['put']);
    }

    renderer.rule = function (css, block) {
        block = block || renderer.hash(css);
        block = renderer.pfx + block;
        renderer.put('.' + block, css);

        return ' ' + block;
    };
};
