'use strict';
var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

var jasmine = require('gulp-jasmine');

gulp.task('test', function () {
    return gulp.src('spec/**/*.spec.js')
        .pipe(jasmine());
});


gulp.task('watch', function () {
    watch(['./index.js', 'app/**/*.js', 'spec/**/*.spec.js'], batch(function (events, done) {
        gulp.start('test', done);
    }));
});

