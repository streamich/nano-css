'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('keyframes', renderer, ['rule']);
    }

    renderer.keyframes = function (styles, block) {
        if (!block) {
            block = renderer.hash(styles);
        }
        block = renderer.pfx + block;

        var obj = {};

        obj['@keyframes' + block] = styles;

        renderer.put(block, obj);

        return block;
    };
};
