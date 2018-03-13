'use strict';

var pkg = require('../package.json');
var config = require('./webpack.config.cjs.js');

config.output.filename = pkg.name + '.umd.min.js';
config.output.library = pkg.name;
config.output.libraryTarget = 'umd';

module.exports = config;
