const gulp    = require('gulp');
const cssnano = require('gulp-cssnano');
const rename  = require("gulp-rename");

module.exports = function() {
  return gulp.src('bower_components/normalize-css/normalize.css')
    .pipe(cssnano())
    .pipe(rename(function(path){
      path.extname = '.scss';
    }))
    .pipe(gulp.dest('src/sass/0-plugins'));
};
