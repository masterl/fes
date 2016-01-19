var gulp    = require('gulp');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");

module.exports = function() {
    return gulp.src('bower_components/normalize-css/normalize.css')
        .pipe(cssnano())
        .pipe(rename(function(path){
            path.extname = '.scss';
        }))
        .pipe(gulp.dest('src/sass/0-plugins'));
};
