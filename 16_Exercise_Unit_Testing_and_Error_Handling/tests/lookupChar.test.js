let {assert} = require("chai");
let {lookupChar} = require("../03_CharLookUp");

describe("Test lookupChar with incorrect type", () => {
    it("Result should be indefine with first parameter is incorrect", () => {
        assert.equal(lookupChar(5, 5), undefined);
    })
    it("Result should be indefine with second parameter is incorrect", () => {
        assert.equal(lookupChar("Pesho", "Gosho"), undefined);
    })
    it("Result should be indefine with second parameter is decimal number", () => {
        assert.equal(lookupChar("Pesho", 0.99), undefined);
    })
    it("Result should be indefine with first parameter is array", () => {
        assert.equal(lookupChar([], 0), undefined);
    })
});

describe("Test lookupChar with correct type but incorrect value of the index", () => {
    it("Result should be Incorrect index with bigger index", () => {
        assert.equal(lookupChar("Todor", 100), "Incorrect index");
    })
    it("Result should be Incorrect index with equal index", () => {
        assert.equal(lookupChar("Todor", 5), "Incorrect index");
    })
    it("Result should be Incorrect index with negative index", () => {
        assert.equal(lookupChar("Todor", -1), "Incorrect index");
    })
});

describe("Test lookupChar with correct type and value", () => {
    it("result should be T with zero index (Todor)", () => {
         assert.equal(lookupChar("Todor", 0), "T");
    })
    it("result should be r with last index (Todor)", () => {
        assert.equal(lookupChar("Todor", 4), "r");
   })
});