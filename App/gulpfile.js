// Variables

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

// sass tasks

gulp.task('sass', function () {
    gulp.src('scss/style.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        //.pipe(sourcemaps.write())
        .pipe(minifyCss())
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
        .pipe(minifyCss()) 
        .pipe(concat('papercon-style.css'))
        .pipe(gulp.dest('../css/'));
});

gulp.task('netinc-sass', function () {
    gulp.src('scss/netinc.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        //.pipe(sourcemaps.write())
        .pipe(minifyCss())
        .pipe(concat('netinc-style.css'))
        .pipe(gulp.dest('../css/'));
});

gulp.task('supercorr-sass', function () {
    gulp.src('scss/supercorr.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        //.pipe(sourcemaps.write())
        .pipe(minifyCss())
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
        .pipe(minifyCss())
        .pipe(concat('nanotechnology-style.css'))
        .pipe(gulp.dest('../css/'));
});

gulp.task('place-sass', function () {
    gulp.src('scss/place.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        //.pipe(sourcemaps.write())
        .pipe(minifyCss())
        .pipe(concat('place-style.css'))
        .pipe(gulp.dest('../css/'));
});

gulp.task('srw-sass', function () {
    gulp.src('scss/srw.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        //.pipe(sourcemaps.write())
        .pipe(minifyCss())
        .pipe(concat('srw-style.css'))
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

// supercorr watch task
gulp.task('supercorr-watch', function () {
    gulp.watch('scss/**/*.scss', ['supercorr-sass'])
});

// netinc watch task
gulp.task('netinc-watch', function () {
    gulp.watch('scss/**/*.scss', ['netinc-sass'])
});

// nano watch task
gulp.task('nano-watch', function () {
    gulp.watch('scss/**/*.scss', ['nano-sass'])
});

// place watch task
gulp.task('place-watch', function () {
    gulp.watch('scss/**/*.scss', ['place-sass'])
});

// srw watch task
gulp.task('srw-watch', function () {
    gulp.watch('scss/**/*.scss', ['srw-sass'])
});

// Combine all tasks
gulp.task('all', ['sass', 'papercon-sass', 'supercorr-sass', 'nano-sass', 'netinc-sass', 'place-sass', 'srw-sass']);
gulp.task('watch-all', ['watch', 'papercon-watch', 'supercorr-watch', 'nano-watch', 'netinc-watch', 'place-watch', 'srw-watch']);


// create default task

gulp.task('default', ['all', 'watch-all']);

/////////////////////////////////////////////////////

// Save the date task

gulp.task('std', function () {
    gulp.src('scss/savethedate.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        //.pipe(sourcemaps.write())
        .pipe(minifyCss())
        .pipe(concat('std-style.css'))
        .pipe(gulp.dest('../css/'));
});

gulp.task('std-watch', function () {
    gulp.watch('scss/**/*.scss', ['std'])
});

gulp.task('watch-std', ['std-watch']);
gulp.task('std-task', ['std-watch', 'watch-std']);