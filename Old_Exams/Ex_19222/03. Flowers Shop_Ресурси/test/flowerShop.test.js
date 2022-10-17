let flowerShop = require('../flowerShop');
let {assert} = require('chai');

describe("Tests for flowerShop", () => {
    describe("Test calcPriceOfFlowers(flower, price, quantity", () => {
        it('should throw a new Error if input is invalid', () => {
            let errMsg = `Invalid input!`;
            assert.throw(() => flowerShop.calcPriceOfFlowers("sunflower", "2.50", "5"), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers("sunflower", 2.50, "5"), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers("sunflower", "2.50", 5), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers(3, 2, 5), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers("", 2.50, 5), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers("rose", 2, 5.5), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers("sunflower", ["2.50"], 5), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers(["sunflower", "rose"], 2, 5), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers(["sunflower", "rose"], 2, [5, 4]), errMsg);
        });
        it('should return the the multiplies price and quantity if the input is valid', () => {
            let returnMsg = `You need $${(4 * 5).toFixed(2)} to buy rose!`;
            assert.equal(flowerShop.calcPriceOfFlowers("rose", 4, 5), returnMsg);
        });
    });

    describe("Test checkFlowersAvailable(flower, gardenArr)", () => {
        it('should return msg if the flower is available', () => {
            let returnMsg = `The Rose are available!`;
            assert.equal(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"]), returnMsg);
        });
        it('should return msg if the flower is available', () => {
            let returnMsg = `The Sunflower are sold! You need to purchase more!`;
            assert.equal(flowerShop.checkFlowersAvailable("Sunflower", ["Rose", "Lily", "Orchid"]), returnMsg);
        });

    });

    describe("Test sellFlowers(gardenArr, space)", () => {
        it('should throw a new Error if input is invalid', () => {
            let errMsg = `Invalid input!`;
            assert.throw(() => flowerShop.calcPriceOfFlowers(["Rose", "Lily", "Orchid"], "2"), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers(["Rose", "Lily", "Orchid"], 2.5), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers(["Rose", "Lily", "Orchid"], ["2"]), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers(["Rose", "Lily", "Orchid"], -2), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers(["Rose", "Lily", "Orchid"], 3), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers("Rose", 2), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers(2, "2"), errMsg);
            assert.throw(() => flowerShop.calcPriceOfFlowers(2, 2), errMsg);
        });
        it('should remove an element on the given index and return the rest of the array joined by "/"', () => {
            let returnMsg = "Lily / Orchid";
            let returnMsg2 = "Rose / Lily"
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0), returnMsg);
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2), returnMsg2);
        });
    });
});