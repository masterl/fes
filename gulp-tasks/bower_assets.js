'use strict';

const gulp    = require('gulp');
const cssnano = require('gulp-cssnano');

module.exports = () => {
  return gulp.src('bower_components/normalize-css/normalize.css')
    .pipe(cssnano())
    .pipe(gulp.dest('src/stylus/0-plugins'));
};
