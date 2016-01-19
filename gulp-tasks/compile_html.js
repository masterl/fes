var gulp = require('gulp');
var jade = require('jade');
var gulpJade = require('gulp-jade');

module.exports = function() {
    return gulp.src('src/templates/*.jade')
               .pipe(gulpJade({
                   jade: jade,
                   pretty: true
               }))
               .pipe(gulp.dest('build'));
};
