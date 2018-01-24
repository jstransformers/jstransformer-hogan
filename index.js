'use strict'

const hogan = require('hogan.js')

exports.name = 'hogan'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  options = options || {}
  const obj = hogan.compile(str, options)
  return obj.render.bind(obj)
}
