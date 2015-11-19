'use strict';
var _ = require('lodash');

exports.countObjects = function _countObjects(arrayToCount) {
    var count = 0;

    _.forEach(arrayToCount, function _loopThroughArray() {
        count++;
    });

    return count;
};
