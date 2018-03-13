'use strict';

var pkg = require('../package.json');
var join = require('path').join;

module.exports = {
    entry: join(__dirname, '..', 'lib', 'index.js'),

    output: {
        filename: pkg.name + '.min.js',
        path: join(__dirname, '..', 'dist')
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        enforceExtension: false
    }
};
