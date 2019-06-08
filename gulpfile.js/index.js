const { series, parallel, watch } = require('gulp');
const chalk                       = require('chalk');

const bower_assets = require('./bower-assets');
const serve_files  = require('./serve-files');

const compile = {
  html:   require('./compile-html'),
  stylus: require('./compile-stylus')
};

const compile_tasks = [];

for (const key in compile) {
  compile_tasks.push(compile[key]);

  exports[`compile:${key}`] = compile[key];
}

function default_task (cb) {
  console.log(chalk.blue('\n\tBuild generated!\n'));

  cb();
}

function startdev () {
  console.log(chalk.blue('Watching Pug templates...'));
  watch('src/templates/**/*.pug', compile.html);
  console.log(chalk.blue('Watching stylus files...'));
  watch('src/stylus/**/*.styl', compile.stylus);
}

exports['serve-files'] = serve_files;

exports.default = series(bower_assets, parallel(...compile_tasks), default_task);

exports.startdev = series(
  bower_assets,
  parallel(
    serve_files,
    startdev
  )
);
