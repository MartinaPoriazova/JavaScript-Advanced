let carService = require('../03. Car Service_Resources');
let {assert} = require('chai');

describe("Tests for carService", () => {
    describe("Test isItExpensive(issue)", () => {
        it('should recieve "Engine" or "Transmission" as an input', () => {
            let returnMsg = `The issue with the car is more severe and it will cost more money`;
            assert.equal(carService.isItExpensive("Engine"), returnMsg);
            assert.equal(carService.isItExpensive("Transmission"), returnMsg);
        });
        it('should return message if the input is not "Engine" or "Transmission"', () => {
            let returnMsg = `The overall price will be a bit cheaper`;
            assert.equal(carService.isItExpensive("Other"), returnMsg);
        });
    });

    describe("Test discount(numberOfParts, totalPrice)", () => {
        it('should throw a new Error if numberOfParts or totalPrice is not a number', () => {
            let errMsg = `Invalid input`;
            assert.throw(() => carService.discount("5", 5), errMsg);
            assert.throw(() => carService.discount(5, "5"), errMsg);
            assert.throw(() => carService.discount("5", "5"), errMsg);
            assert.throw(() => carService.discount([], 5), errMsg);
            assert.throw(() => carService.discount(5, []), errMsg);
            assert.throw(() => carService.discount("", []), errMsg);
        
        });
        it('should not be able to apply the discount if numberOfParts is less or equal to 2', () => {
            let returnMsg = `You cannot apply a discount`;
            assert.equal(carService.discount(2, 2), returnMsg);
            assert.equal(carService.discount(1, 2), returnMsg);
        });
        it('discount should be 15% when numberOfParts is higher than 2 and smaller or equal to 7', () => {
            assert.equal(carService.discount(3, 50), `Discount applied! You saved ` + 50 * 0.15 + `$`);
            assert.equal(carService.discount(7, 50), `Discount applied! You saved ` + 50 * 0.15 + `$`);
        });
        it('discount should be 30% when numberOfParts is higher than 7', () => {
            assert.equal(carService.discount(8, 50), `Discount applied! You saved ` + 50 * 0.30 + `$`);
            assert.equal(carService.discount(100, 50), `Discount applied! You saved ` + 50 * 0.30 + `$`);
        });
    });

    describe("Test partsToBuy(partsCatalog, neededParts)", () => {
        it('should throw a new Error if partsCatalog or neededParts is not an array', () => {
            let errMsg = `Invalid input`;
            assert.throw(() => carService.partsToBuy("catalog", "parts"), errMsg);
            assert.throw(() => carService.partsToBuy(5, 10), errMsg);
            assert.throw(() => carService.partsToBuy("5", 10), errMsg);
            assert.throw(() => carService.partsToBuy(5, "10"), errMsg);
            assert.throw(() => carService.partsToBuy([], 10), errMsg);
            assert.throw(() => carService.partsToBuy(5, []), errMsg);
        });
        it('should return 0 if partsCatalog is empty', () => {
            assert.equal(carService.partsToBuy([], ["something", "something2"]), 0);
        });
        it('should return the total price of all needed parts', () => {
            let partsCatalog = [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
            let neededParts = ["blowoff valve"];
            assert.equal(carService.partsToBuy(partsCatalog, neededParts), 145);
        })


    });
});
