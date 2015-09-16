﻿// Variables

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

// sass task


gulp.task('sass', function () {
    gulp.src('scss/style.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        //.pipe(sourcemaps.write())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('../css/'));
});

gulp.task('papercon-sass', function () {
    gulp.src('scss/papercon.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        //.pipe(sourcemaps.write())
        .pipe(concat('papercon-style.css'))
        .pipe(gulp.dest('../css/'));
});

gulp.task('supercorr-sass', function () {
    gulp.src('scss/supercorr.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        //.pipe(sourcemaps.write())
        .pipe(concat('supercorrexpo-style.css'))
        .pipe(gulp.dest('../css/'));
});

// watch tasks

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass'])
});

// papercon watch task
gulp.task('papercon-watch', function () {
    gulp.watch('scss/**/*.scss', ['papercon-sass'])
});

// papercon watch task
gulp.task('supercorr-watch', function () {
    gulp.watch('scss/**/*.scss', ['supercorr-sass'])
});

// create default task

gulp.task('default', ['sass', 'watch']);
gulp.task('papercon', ['papercon-sass', 'papercon-watch']);
gulp.task('supercorr', ['supercorr-sass', 'supercorr-watch']);