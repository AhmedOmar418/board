const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('node-sass'));

gulp.task('styles', function(done) {
  gulp.src('styles/**/*.scss')
    .pipe(sass({
        errLogToConsole: true
    }).on('error', sass.logError)) // Proper error logging for Sass
    .pipe(cleanCSS())
    .pipe(concat('style.css')) // Concatenate after minifying
    .pipe(gulp.dest('./public/stylesheets/'));
  done();
});
