'use strict';

const path    = require('path');
const express = require('express');
const app     = express();

const PORT = 4000;

module.exports = () => {
  app.use(require('connect-livereload')({port: 35729}));
  app.use(express.static(path.join(__dirname, '/../build')));
  app.listen(PORT, '0.0.0.0');
};

module.exports.dependencies = ['compile_stylus', 'compile_html'];
