const { src, dest } = require('gulp');
const gulp_pug      = require('gulp-pug');

const build_dir = require('../build_utils/build_dir');

const compile_html = () => {
  return src('src/templates/*.pug')
    .pipe(gulp_pug({
      pretty: true
    }))
    .pipe(dest(build_dir));
};

module.exports = compile_html;
