const gulp     = require('gulp');
const gulp_pug = require('gulp-pug');

module.exports = function() {
  return gulp.src('src/templates/*.pug')
    .pipe(gulp_pug({
      pretty: true
    }))
    .pipe(gulp.dest('build'));
};
