const gulp    = require('gulp');
const express = require('express');
const app     = express();

module.exports = function(){
  console.log(__dirname+'/../build');
  app.use(require('connect-livereload')({port: 35729}));
  app.use(express.static(__dirname+'/../build'));
  app.listen(4000, '0.0.0.0');
};

module.exports.dependencies = ['compile_stylus','compile_html'];
