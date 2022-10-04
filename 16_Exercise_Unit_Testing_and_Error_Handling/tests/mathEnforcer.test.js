let {assert} = require("chai");
const mathEnforcer = require("../04_MathEnforcer");
let {addFive, subtractTen, sum} = require("../04_MathEnforcer");

describe('mathEnforcer', function() {
    describe('addFive', function() {
        it('should return undefined with a non-number parameter', function() {
            assert.equal(mathEnforcer.addFive("add"), undefined);
        });
        it('should return correct result with a number parameter', function() {
            assert.equal(mathEnforcer.addFive(10), 10 + 5);
        });
        it('should return correct result with a negative number parameter', function() {
            assert.equal(mathEnforcer.addFive(-10), -10 + 5);
        });
        it('should return correct result with a floating-point number parameter', function() {
            assert.closeTo(mathEnforcer.addFive(0.23), 5 + 0.23, 0.01);
        });
    });

    describe('subtractTen', function() {
        it('should return undefined with a non-number parameter', function() {
            assert.equal(mathEnforcer.subtractTen("substractTen"), undefined);
        });
        it('should return correct result with a number parameter', function() {
            assert.equal(mathEnforcer.subtractTen(10), 10 - 10);
        });
        it('should return correct result with a negative number parameter', function() {
            assert.equal(mathEnforcer.subtractTen(-10), -10 - 10);
        });
        it('should return correct result with a floating-point number parameter', function() {
            assert.closeTo(mathEnforcer.subtractTen(0.23), -10 + 0.23, 0.01);
        });
    });

    describe('sum', function() {
        it('should return undefined with a first non-number parameter', function() {
            assert.equal(mathEnforcer.sum("num1", 2), undefined);
        });
        it('should return undefined with a second non-number parameter', function() {
            assert.equal(mathEnforcer.sum(1, "num2"), undefined);
        });
        it('should return correct result with a number parameter', function() {
            assert.equal(mathEnforcer.sum(1, 2), 1 + 2);
        });
        it('should return correct result with a negative number parameter', function() {
            assert.equal(mathEnforcer.sum(-1, -2), -1 + -2);
        });
        it('should return correct result with a floating-point number parameter', function() {
            assert.closeTo(mathEnforcer.sum(0.23, 0.99), 0.23 + 0.99, 0.01);
        });
    });
});