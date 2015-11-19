'use strict';
var myModule = require('../index.js');
var util = require('../app/_util.js');

describe('Public node module methods', function _testSuite() {
    it('Should correctly count items in an Array', function _testCountArray() {

        spyOn(util, 'log');

        var theCount = myModule.countObjects([1, 2, 3]);

        expect(util.log).toHaveBeenCalled();
        expect(theCount).toEqual(3);
    });
});
