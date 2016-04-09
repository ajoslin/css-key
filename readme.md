# css-key [![Build Status](https://travis-ci.org/ajoslin/css-key.svg?branch=master)](https://travis-ci.org/ajoslin/css-key)

> Transform a key to a valid css property key

Extracted from [blakeembrey/free-style](https://github.com/blakeembrey/free-style)

## Install

```
$ npm install --save css-key
```


## Usage

```js
var cssKey = require('css-key')

cssKey('WebkitTransition')
//=> -webkit-transition
```

## API

#### `cssKey(jsKey)` -> `cssKey`

##### jsKey

*Required*
Type: `string`

A PascalCase or camelCase javascript key.

Returns that key transformed to a valid css property.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
