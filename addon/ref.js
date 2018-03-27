'use strict';

var addonPipe = require('./pipe').addon;

exports.addon = function (renderer) {
    if (!renderer.pipe) {
        addonPipe(renderer);
    }

    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('ref', renderer, ['pipe']);
    }

    renderer.createRef = function () {
        var pipe = renderer.pipe();
        var el = null;

        var ref = function (element) {
            if (el) el = element;
            else {
                el = null;
                pipe.remove();
            }
        };

        var obj = {ref: ref};

        obj[pipe.attr] = '';

        return function (css) {
            pipe.css(css);
            return obj;
        };
    };
};
