'use strict';

var checkUsersValid = require('./5.js');
var assert = require('assert');

var initialUsers = [{id: 1}, {id: 2}, {id: 3}];

var validUsers = [{id: 1}, {id: 2}, {id: 3}]; // match initialUsers array
var invalidUsers = [{id: 1}, {id: 2}, {id: 5}]; // doesn't match initialUsers array

var testAllValid = checkUsersValid(initialUsers);


assert.equal(true, testAllValid(validUsers));
assert.equal(false, testAllValid(invalidUsers));
