'use strict';

const gulp   = require('gulp');
const tinylr = require('tiny-lr')();

gulp.task('livereload',function(){
  tinylr.listen(35729);
});

const notify = function notifyLiveReload(event) {
  const file_name = require('path').relative(__dirname+'/build', event.path);

  tinylr.changed({
    body: {
      files: [file_name]
    }
  });
}

// Load all tasks from folder `gulp-tasks`
require('gulp-task-loader')();

gulp.task('default',['express','livereload'],function(){
    gulp.watch('src/sass/**/*', ['compile_sass']);
    gulp.watch('src/templates/**/*.pug', ['compile_html']);
    gulp.watch('build/**/*', notify);
});
