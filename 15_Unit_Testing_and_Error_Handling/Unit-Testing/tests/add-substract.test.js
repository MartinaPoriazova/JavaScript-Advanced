let {assert} = require("chai");
const {createCalculator} = require("../add-substract");

describe('Calculator Tests', () => {
    // it('should return an object', () => {
    //     assert.equal(typeof createCalculator, ('object'));
    // });
    // it('should return an object', () => {
    //     assert.isObject(createCalculator);
    // });
    it('should return an object with functions as properties', () => {
        const calculator = createCalculator();
        assert.isTrue(calculator.hasOwnProperty('add'));
        assert.isTrue(calculator.hasOwnProperty('subtract'));
        assert.isTrue(calculator.hasOwnProperty('get'));
    });
    it('Initial sum cannot be modified', ()=>{
        const calculator = createCalculator();
        assert.equal(calculator.get(), 0);
    });
    it('add method should add a number to internal sum', () => {
        const calculator = createCalculator();
        calculator.add(3);
        assert.equal(calculator.get(), 3);
    });
    it('add method should add a string containing a number to internal sum', () => {
        const calculator = createCalculator();
        calculator.add('3');
        assert.equal(calculator.get(), 3);
    });
    it('subtract method should substracted a number from the internal sum', () => {
        const calculator = createCalculator();
        calculator.subtract(1);
        assert.equal(calculator.get(), -1);
    });
    it('subtract method should substracted a string containing a number from the internal sum', () => {
        const calculator = createCalculator();
        calculator.subtract('1');
        assert.equal(calculator.get(), -1);
    });
});