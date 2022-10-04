const { assert } = require('chai');
const { rgbToHexColor } = require('../rgb-to-hex');

describe('rgbToHexColor', () => {
    it('should return undefined if first number is not an integer', () => {
        assert.equal(rgbToHexColor("number", 20, 10), undefined);
    });
    it('should return undefined if second number is not an integer', () => {
        assert.equal(rgbToHexColor(10, "number", 20), undefined);
    });
    it('should return undefined if third number is not an integer', () => {
        assert.equal(rgbToHexColor(20, 10, "number"), undefined);
    });
    it('should return undefined if first number is negative', () => {
        assert.equal(rgbToHexColor(-1, 10, 20), undefined);
    });
    it('should return undefined if second number is negative', () => {
        assert.equal(rgbToHexColor(10, -10, 20), undefined);
    });
    it('should return undefined if third number is negative', () => {
        assert.equal(rgbToHexColor(10, 10, -20), undefined);
    });
    it('should return undefined if first number is higher than 255', () => {
        assert.equal(rgbToHexColor(256, 10, 20), undefined);
    });
    it('should return undefined if second number is higher than 255', () => {
        assert.equal(rgbToHexColor(10, 256, 20), undefined);
    });
    it('should return undefined if third number is higher than 255', () => {
        assert.equal(rgbToHexColor(10, 10, 256), undefined);
    });
    it('should return correct hex if input is valid', () => {
        assert.equal(rgbToHexColor(255, 0, 0),'#FF0000');
    });
    it('should return correct hex if input is valid', () => {
        assert.equal(rgbToHexColor(0, 255, 0),'#00FF00');
    });
    it('should return correct hex if input is valid', () => {
        assert.equal(rgbToHexColor(0, 0, 255),'#0000FF');
    });
});

