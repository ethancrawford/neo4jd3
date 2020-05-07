'use strict';

var gulp = require('gulp'),
    clean = require('./clean'),
    images = require('./images'),
    scripts = require('./scripts'),
    styles = require('./styles'),
    node_modules = require('./node_modules'),
    connect = require('./connect'),
    watch = require('./watch');

gulp.task('default', gulp.series('clean', 'images', 'scripts', 'styles', 'node_modules', 'connect', 'watch', function(callback) {
    callback();
}));
