'use strict';
var myModule = require('../index.js');

describe('Public node module methods', function _testSuite(){
    it('Should correctly count items in an Array', function _testCountArray(){
         var theCount = myModule.countObjects([1,2,3]);

         expect(theCount).toEqual(3);
    });
});
