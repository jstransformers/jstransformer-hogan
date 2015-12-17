# jstransformer-hogan

[Hogan.js](https://www.npmjs.com/package/hogan.js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-hogan/master.svg)](https://travis-ci.org/jstransformers/jstransformer-hogan)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-hogan/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-hogan?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-hogan/master.svg)](http://david-dm.org/jstransformers/jstransformer-hogan)
[![NPM version](https://img.shields.io/npm/v/jstransformer-hogan.svg)](https://www.npmjs.org/package/jstransformer-hogan)

## Installation

    npm install jstransformer-hogan

## API

```js
var hogan = require('jstransformer')(require('jstransformer-hogan'))

hogan.render('Hello @{{name}}!', {name: 'World'}).body
//=> 'Hello World!'
```

## License

MIT
