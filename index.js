'use strict'

var hogan = require('hogan.js')

exports.name = 'hogan'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  options = options || {}
  var obj = hogan.compile(str, options)
  return obj.render.bind(obj)
}
