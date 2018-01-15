'use strict';

const path   = require('path');
const gulp   = require('gulp');
const tinylr = require('tiny-lr')();

gulp.task('livereload', () => {
  tinylr.listen(35729);
});

const notify = function notifyLiveReload (event) {
  const file_name = path.relative(path.join(__dirname, '/build'), event.path);

  tinylr.changed({
    body: {
      files: [file_name]
    }
  });
};

// Load all tasks from folder `gulp-tasks`
require('gulp-task-loader')();

gulp.task('default', ['express', 'livereload'], () => {
  gulp.watch('src/stylus/**/*', ['compile_stylus']);
  gulp.watch('src/templates/**/*.pug', ['compile_html']);
  gulp.watch('build/**/*', notify);
});
