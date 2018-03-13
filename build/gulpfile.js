'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var config = require('../tsconfig.json');

gulp.task('build-ts', function() {
    return gulp
        .src(['../src/**/*.ts', '!../src/**/__tests__/**'])
        .pipe(
            ts(Object.assign({}, config.compilerOptions, {
                target: 'es5',
                module: 'commonjs',
            }))
        )
        .pipe(gulp.dest('../lib'));
});

gulp.task('build-modules', function() {
    return gulp
        .src(['../src/**/*.ts', '!../src/**/__tests__/**'])
        .pipe(
            ts(Object.assign({}, config.compilerOptions, {
                target: 'ESNext',
                module: 'ESNext',
            }))
        )
        .pipe(gulp.dest('../modules'));
});
