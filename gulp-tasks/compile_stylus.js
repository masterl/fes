const gulp   = require('gulp');
const stylus = require('gulp-stylus');

module.exports = function() {
  return gulp.src('src/stylus/main.styl')
    .pipe(stylus({
      'include css': true,
      compress: true
    }))
    .pipe(gulp.dest('build/css'));
};

module.exports.dependencies = ['bower_assets'];
