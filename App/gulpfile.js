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

gulp.task('nano-sass', function () {
    gulp.src('scss/nano.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        //.pipe(sourcemaps.write())
        .pipe(concat('nanotechnology-style.css'))
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

// nano watch task
gulp.task('nano-watch', function () {
    gulp.watch('scss/**/*.scss', ['nano-sass'])
});

// Combine all tasks
gulp.task('all', ['sass', 'papercon-sass', 'supercorr-sass', 'nano-sass']);
gulp.task('watch-all', ['watch', 'papercon-watch', 'supercorr-watch', 'nano-watch']);

// create default task

/*gulp.task('default', ['sass', 'watch']);
gulp.task('papercon', ['papercon-sass', 'papercon-watch']);
gulp.task('supercorr', ['supercorr-sass', 'supercorr-watch']);
gulp.task('nano', ['nano-sass', 'nano-watch']);*/

gulp.task('default', ['all', 'watch-all']);