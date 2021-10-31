'use strict';

var configure = require('safe-stable-stringify').configure;
var stringify = configure({ bigint: false });

exports.addon = function (renderer) {
    renderer.stringify = stringify;
};
