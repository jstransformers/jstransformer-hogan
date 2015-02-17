var assert = require('assert');
var fs = require('fs');
var hogan = require('hogan.js');
var join = require('path').join;

var transform = require('../');

var locals = {name:'hogan'};
var file = join(__dirname, 'input.hogan');
var input = fs.readFileSync(file, 'utf8');
var expected = fs.readFileSync(join(__dirname, 'expected.html'), 'utf8');
var options = { filename: file };
var output;
var failed = false;

function assertEqual(output, expected) {
  console.log('\tOutput:', JSON.stringify(output));
  console.log('\tExpected:', JSON.stringify(expected));
  if (output !== expected) {
    console.log('\tFAILED');
    failed = true;
  } else {
    console.log('\tPASSED');
  }
}

try {
  console.log('\ncompile():');
  output = transform.compile(input, options).render(locals);
  assertEqual(output, expected);
} catch (e) {
  failed = true;
  console.error(e.stack);
}

console.log('\nTests ' + (failed ? 'FAILED' : 'PASSED'));

if (failed) process.exit(1);
