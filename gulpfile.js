'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var jasmine = require('gulp-jasmine');
var istanbul = require('gulp-istanbul');

var onError = function (error) {
    gutil.beep();
    var errorString = 'Gulp Error(' + error.plugin + '): ' + error.message;
    notify(errorString);
    gutil.log(gutil.colors.white.bgRed.bold(errorString));
    this.emit('end'); // Have to emit 'end' to allow the task to continue on
};

gulp.task('test', ['coverage'], function () {
    return gulp.src('spec/**/*.spec.js')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(jasmine())
        .pipe(istanbul.writeReports()) // Creating the reports after tests ran and enforce threshold
        .pipe(istanbul.enforceThresholds({
            thresholds: {
                global: 90
            }
        }));
});

gulp.task('coverage', function () {
    return gulp.src(['app/**/*.js'])
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(istanbul.hookRequire());
});


gulp.task('watch', ['test'], function () {


    gulp.watch(['./index.js', 'app/**/*.js', 'spec/**/*.spec.js'], ['test']);
});
