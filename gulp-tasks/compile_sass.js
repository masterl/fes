var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

module.exports = function() {
    return sass("src/sass/main.sass")
        .on('error',sass.logError)
        .pipe(gulp.dest("build/css"));
};
module.exports.dependencies = ['bower_assets'];
