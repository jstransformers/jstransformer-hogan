'use strict';

var hogan = require('hogan.js');
var fs  = require('fs');

exports.name = 'hogan';
exports.outputFormat = 'html';

exports.compile = function (str, options) {
  options = options || {};
  return hogan.compile(str, options);
}

