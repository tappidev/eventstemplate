// Variables

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

// watch task

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass'])
});

// create default task

gulp.task('default', ['sass', 'watch']);