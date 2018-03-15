'use strict';

var pkg = require('../package.json');
var join = require('path').join;

module.exports = {
    entry: join(__dirname, '..', 'index.js'),

    output: {
        filename: pkg.name + '.min.js',
        path: join(__dirname, '..', 'dist')
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        enforceExtension: false
    }
};
