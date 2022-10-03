const { expect } = require('chai');
const { sum } = require('../utils/my-math');

describe('sum', () => {
    it('should return correct result with array of numbers', () => {
        // Arrange
        let array = [1, 2, 3];

        // Act
        let result = sum(array);

        // Assert
        // if (result != 6) {
        // throw new Error('Test fails');
        // }

        expect(result).to.be.equal(6);
    });

    it('should return NaN if input is not an array', () => {
        // Arrange
        let invalidArray = 'Invalid array';

        // Act
        let result = sum(invalidArray);

        // Assert
        expect(result).to.be.equal(NaN);
    });

    it('should calculate correct result with array of mixed types', () => {
        // Arrange
        let mixedArray = ['1', true, 2];

        // Act
        let result = sum(mixedArray);

        // Assert
        expect(result).to.be.equal(4);
    });
});

describe('product', () => {
    it('should return correct result', () => {
        
    });

});

