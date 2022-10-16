let rentCar = require('../rentCar');
let {assert} = require('chai');

describe("Tests for rentCar", () => {
    describe("Test searchCar(shop, model)", () => {
        it('should throw a new Error if input is invalid', () => {
            let errMsg = `Invalid input!`;
            assert.throw(() => rentCar.searchCar("shop", "model"), errMsg);
            assert.throw(() => rentCar.searchCar(3, 4), errMsg);
            assert.throw(() => rentCar.searchCar("shop", 4), errMsg);
            assert.throw(() => rentCar.searchCar("shop", []), errMsg);
            assert.throw(() => rentCar.searchCar([], 4), errMsg);
        });
        it('should throw a new Error if there is no matching elements', () => {
            let errMsg = `There are no such models in the catalog!`;
            assert.throw(() => rentCar.searchCar(["BMW", "Audi"], "Opel"), errMsg);
        });
        it('should return number of matching elements and the model if present', () => {
            assert.equal(rentCar.searchCar(["BMW", "Audi"], "BMW"), `There is 1 car of model BMW in the catalog!`);
        });
    });

    describe("Test calculatePriceOfCar(model, days)", () => {
        it('should throw a new Error if input is invalid', () => {
            let errMsg = `Invalid input!`;
            assert.throw(() => rentCar.calculatePriceOfCar("model", "days"), errMsg);
            assert.throw(() => rentCar.calculatePriceOfCar(4, "days"), errMsg);
            assert.throw(() => rentCar.calculatePriceOfCar(4, 4), errMsg);
            assert.throw(() => rentCar.calculatePriceOfCar(["model"], 5), errMsg);
            assert.throw(() => rentCar.calculatePriceOfCar("model", ["days"]), errMsg);
        });
        it('should returns the model and the price it will cost for the given period', () => {
            assert.equal(rentCar.calculatePriceOfCar("BMW", 5), `You choose BMW and it will cost $225!`);
        });
        it('should throw a new Error if there is no such model', () => {
            let errMsg = `No such model in the catalog!`;
            assert.throw(() => rentCar.calculatePriceOfCar("Opel", 5), errMsg);
        });
    });

    describe("Test checkBudget(costPerDay, days, budget)", () => {
        it('should throw a new Error if input is invalid', () => {
            let errMsg = `Invalid input!`;
            assert.throw(() => rentCar.checkBudget("220", "10", "5000"), errMsg);
            assert.throw(() => rentCar.checkBudget(220, "10", "5000"), errMsg);
            assert.throw(() => rentCar.checkBudget("220", 10, "5000"), errMsg);
            assert.throw(() => rentCar.checkBudget("220", "10", 5000), errMsg);
            assert.throw(() => rentCar.checkBudget("220", 10, 5000), errMsg);
            assert.throw(() => rentCar.checkBudget([], [], []), errMsg);
            assert.throw(() => rentCar.checkBudget([], 10, 5000), errMsg);
        });
        it('should return msg and allow to rent a car if budget is bigger or equal than cost', () => {
            let msg = `You rent a car!`;
            assert.equal(rentCar.checkBudget(220, 1, 220), msg);
            assert.equal(rentCar.checkBudget(220, 3, 700), msg);
        });
        it('should return msg and not allow to rent a car if budget is less than cost', () => {
            let msg = `You need a bigger budget!`;
            assert.equal(rentCar.checkBudget(220, 1, 200), msg);
            assert.equal(rentCar.checkBudget(220, 5, 800), msg);
        });
    });
});
