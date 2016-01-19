"use strict";

var gulp = require('gulp');
var server = require('tiny-lr')();
var gulpJade = require('gulp-jade');

var tinylr = require('tiny-lr')();
gulp.task('livereload',function(){
    tinylr.listen(35729);
});

var notify = function notifyLiveReload(event) {
    var fileName = require('path').relative(__dirname+'/build', event.path);

    tinylr.changed({
        body: {
            files: [fileName]
        }
    });
}

// Load all tasks from folder `gulp-tasks`
require('gulp-task-loader')();

gulp.task('default',['express','livereload'],function(){
    gulp.watch('src/sass/**/*', ['compile_sass']);
    gulp.watch('src/templates/**/*.jade', ['compile_html']);
    gulp.watch('build/**/*', notify);
});
