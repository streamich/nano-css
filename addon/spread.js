'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('spread', renderer, ['put']);
    }

    renderer.spread = function (css, block) {
        if (process.env.NODE_ENV === 'production') {
            block = renderer.hash(css);
        } else {
            block = (block || '') + '_' + renderer.hash(css);
        }
        
        block = renderer.pfx + block;
        renderer.put('.' + block + ',[data-' + block + ']', css);

        var spread = {
            toString: function () {
                return ' ' + block;
            }
        };

        spread['data-' + block] = '';

        return spread;
    };
};
