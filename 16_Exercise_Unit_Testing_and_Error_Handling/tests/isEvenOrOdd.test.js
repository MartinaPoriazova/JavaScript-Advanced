let {assert} = require("chai");
let {isEvenOrOdd} = require("../02_EvenOrOdd");

describe("Test isEvenOrOdd functionality", () => {
    describe("test isEvenOrOdd with incorrect value", () => {
        it("Result should be undefine with array argument", ()=> {
            assert.equal(isEvenOrOdd([]), undefined);
        });
        it("Result should be undefine with empty object argument", () => {
            assert.equal(isEvenOrOdd({}), undefined);
        });
        it("Result should be undefine with object argument", () => {
            assert.equal(isEvenOrOdd({name:"Pesho"}), undefined);
        });
        it("Result should be undefine with number argument", () => {
            assert.equal(isEvenOrOdd(1), undefined);
        });
        it("Result should be undefine with boolean argument", () => {
            assert.equal(isEvenOrOdd(true), undefined);
        });
    });
    
    describe("test isEvenOrOdd with correct value", () => {
        it("Result should be even with `Love`", () => {
            assert.equal(isEvenOrOdd("love"), "even");
        });
        it("Result shpuld be even with `Todor`", () => {
            assert.equal(isEvenOrOdd("Todor"), "odd");
        });
    });
});
