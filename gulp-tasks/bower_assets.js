const gulp    = require('gulp');
const cssnano = require('gulp-cssnano');
const rename  = require("gulp-rename");

module.exports = function() {
  return gulp.src('bower_components/normalize-css/normalize.css')
    .pipe(cssnano())
    .pipe(gulp.dest('src/stylus/0-plugins'));
};
