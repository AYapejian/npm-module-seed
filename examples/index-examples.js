'use strict';
var myModule = require('../index.js');

var indexExamples = {
    countObjects: function _countObjects(arrayToCount){
        return myModule.countObjects(arrayToCount);
    }
};

var count = indexExamples.countObjects([1,2,3]);
console.log('Count: ' + count);



