'use strict';

var getDependencies = require('./16.js');
var assert = require('assert');

var loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                }
            }
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
}

assert.deepEqual(['inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2'],
    getDependencies(loremIpsum));