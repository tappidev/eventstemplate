08/17/2015
Colin McFadden

PROCEDURES FOR INSTALLING FRONT-END DEV ENVIRONMENT
gulp, sass, 

Node.js
npm init

Bower
bower init

Gulp.js
npm install gulp --save-dev

GULP-SASS
npm install gulp-sass --save-dev
npm install gulp-sourcemaps --save-dev

SUSY (css grid)
bower install susy --save

breakpoint-sass: bower install breakpoint-sass --save

include @import "/App/bower_components/susy/sass/susy"; in scss files (_style.scss)
include @import "../bower_components/breakpoint-sass/stylesheets/breakpoint"; in scss files (_style.scss)


PROGRAM GULP TASKS
1) Create gulpfile.js

2) require packages we installed

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

3) ccreate task fro gulp to run:
gulp.task('taskName', function () {

})

4) create the sass task to compile scss to css
gulp.task('sass', function () {
  // gulp.src locates the source files for the process. 
  // This globbing function tells gulp to use all files 
  // ending with .scss or .sass within the scss folder. 
  gulp.src('./scss/**/*.{scss,sass}')
    // Converts Sass into CSS with Gulp Sass 
    .pipe(sass())
    // Outputs CSS files in the css folder
    .pipe(gulp.dest('./css'));
})


5) enhance with sourcemaps
// Gulp Sass Task 
gulp.task('sass', function() {
  gulp.src('./scss/**/*.{scss,sass}')
    // Initializes sourcemaps
    .pipe(sourcemaps.init())
    .pipe(sass())
    // Writes sourcemaps into the CSS file
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
})

6) errorLogToConsole: True

// Gulp Sass Task 
gulp.task('sass', function() {
  gulp.src('./scss/**/*.{scss,sass}')
    // Initializes sourcemaps
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
      }))
    // Writes sourcemaps into the CSS file
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
})

7) Watch task

// Watch scss folder for changes
gulp.task('watch', function() {
  // Watches the scss folder for all .scss and .sass files
  // If any file changes, run the sass task
  gulp.watch('./scss/**/*.{scss,sass}', ['sass'])
})

8) Run tasks with default gulp

// Creating a default task
gulp.task('default', ['sass', 'watch']);

9) FINAL


// Variables

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

// sass task

gulp.task('sass', function () {
    gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        //.pipe(gulp.dest('../css/'))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('../css/'));
});

// watch task

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass'])
});

// create default task

gulp.task('default', ['sass', 'watch']);


TODO
1) livereload
2) autoprefixer
3) css/js minification