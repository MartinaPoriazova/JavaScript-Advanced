let testNumbers = require('../testNumbers');
let {assert} = require('chai');

describe("Tests for testNumbers", () => {
    describe("Test sumNumber(num1, num2)", () => {
      it('should return undefined if parameters are not numbers', () => {
        assert.equal(testNumbers.sumNumbers("12", "-1"), undefined);
        assert.equal(testNumbers.sumNumbers(12, "-1"), undefined);
        assert.equal(testNumbers.sumNumbers("12", -1), undefined);
        assert.equal(testNumbers.sumNumbers([12], ["-1"]), undefined);
        assert.equal(testNumbers.sumNumbers([12], "-1"), undefined);
        assert.equal(testNumbers.sumNumbers(12, [-1]), undefined);
        assert.equal(testNumbers.sumNumbers({}, {}), undefined);
        assert.equal(testNumbers.sumNumbers({}, -1), undefined);
        assert.equal(testNumbers.sumNumbers(12, {}), undefined);
        assert.equal(testNumbers.sumNumbers(12, undefined), undefined);
        assert.equal(testNumbers.sumNumbers(undefined, -1), undefined);
        assert.equal(testNumbers.sumNumbers(undefined, undefined), undefined);
        assert.equal(testNumbers.sumNumbers(12, true), undefined);
      });
      it('should return the sum of numbers by valid input', () => {
        assert.equal(testNumbers.sumNumbers(12, -1), (12 + (-1)).toFixed(2));
        assert.equal(testNumbers.sumNumbers(-12, 1), (-12 + 1).toFixed(2));
        assert.equal(testNumbers.sumNumbers(-12, 1.5), (-12 + 1.5).toFixed(2));
        assert.equal(testNumbers.sumNumbers(12.5, 1), (12.5 + 1).toFixed(2));
        assert.equal(testNumbers.sumNumbers(12.5, 1.5), (12.5 + 1.5).toFixed(2));
      });
    });

    describe("Test numberChecker(input)", () => {
        it('should return proper if number is even', () => {
            let returnMsg = `The number is even!`;
            assert.equal(testNumbers.numberChecker(0), returnMsg);
            assert.equal(testNumbers.numberChecker(2), returnMsg);
            assert.equal(testNumbers.numberChecker(-222), returnMsg);
        });
        it('should return proper if number is odd', () => {
            let returnMsg = `The number is odd!`;
            assert.equal(testNumbers.numberChecker(1), returnMsg);
            assert.equal(testNumbers.numberChecker(3), returnMsg);
            assert.equal(testNumbers.numberChecker(-555), returnMsg);
        });
        it('should throw a new Error if input is not a number', () => {
            let errMsg = `The input is not a number!`;
            assert.throw(() => testNumbers.numberChecker("input"), errMsg);
            assert.throw(() => testNumbers.numberChecker(["input"]), errMsg);
            assert.throw(() => testNumbers.numberChecker(undefined), errMsg);
            // assert.throw(() => testNumbers.numberChecker(["input"]), errMsg);
            // assert.throw(() => testNumbers.numberChecker({"input" : 4}), errMsg);
            // assert.throw(() => testNumbers.numberChecker(true), errMsg);
            // assert.throw(() => testNumbers.numberChecker(undefined), errMsg);
        });
    });

    describe("Test averageSumArray(arr)", () => {
        it('should calculates the sum, and returns the average sum of arrays elements', () => {
            assert.equal(testNumbers.averageSumArray([2, 3]), 2.5);
        });
        it('should calculates the sum, and returns the average sum of arrays elements', () => {
            assert.equal(testNumbers.averageSumArray([1, -2, -3, 4]), 0);
        });
    });
});