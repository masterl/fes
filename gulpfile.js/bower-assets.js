const { src, dest } = require('gulp');
const path          = require('path');
const cssnano       = require('gulp-cssnano');

const src_dir = require('../build_utils/src_dir');

const dest_dir = path.join(src_dir, 'stylus', '0-plugins');

const bower_assets = () => {
  return src('bower_components/normalize-css/normalize.css')
    .pipe(cssnano())
    .pipe(dest(dest_dir));
};

module.exports = bower_assets;
