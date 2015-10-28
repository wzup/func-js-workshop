'use strict';

var Spy = require('./12.js');
var assert = require('assert');

var spy = new Spy(console, 'error');

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

assert.equal(3, spy.count);
