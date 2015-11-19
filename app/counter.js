'use strict';
var _ = require('lodash');
var utils = require('./_util.js');

exports.countObjects = function _countObjects(arrayToCount) {
    utils.log('Counting Objects');


    var count = 0;

    _.forEach(arrayToCount, function _loopThroughArray() {
        count++;
    });

    return count;
};

exports.addObjects = function _addObjects(arrayToAdd) {
    var sum = 0;

    _.forEach(arrayToAdd, function _loopThroughArray(val) {
        sum += val;
    });

    return sum;
};
