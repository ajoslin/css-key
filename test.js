'use strict'

var test = require('tape')
var cssKey = require('./')

test(function (t) {
  t.equal(cssKey('fooBar'), 'foo-bar')
  t.equal(cssKey('FooBar'), '-foo-bar')
  t.equal(cssKey('msFooBar'), '-ms-foo-bar')
  t.end()
})
