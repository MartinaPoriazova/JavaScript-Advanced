let library = require('../library');
let {assert} = require('chai');

describe("Tests for library", () => {
    describe("Test calcPriceOfBook(nameOfBook, year)", () => {
        it('should throw a new Error if input is not valid', () => {
            let errMsg = `Invalid input`;
            assert.throw(() => library.calcPriceOfBook("Name", "5"), errMsg);
            assert.throw(() => library.calcPriceOfBook("Name", ["5"]), errMsg);
            assert.throw(() => library.calcPriceOfBook("Name", 5.55), errMsg);
            assert.throw(() => library.calcPriceOfBook(5, "5"), errMsg);
            assert.throw(() => library.calcPriceOfBook(5.50, 1980), errMsg);
            assert.throw(() => library.calcPriceOfBook(5, 1980), errMsg);
            assert.throw(() => library.calcPriceOfBook(["Name"], "5"), errMsg);
            assert.throw(() => library.calcPriceOfBook(["Name"], 1980), errMsg);
        });
        it('should calculate price without discount of the book and return it with a message', () => {
            let returnMsg = `Price of Troy is 20.00`;
            assert.equal(library.calcPriceOfBook("Troy", 2021), returnMsg);
        });
        it('should calculate price with discount of the book and return it with a message', () => {
            let returnMsg = `Price of Toronto is 10.00`;
            assert.equal(library.calcPriceOfBook("Toronto", 1980), returnMsg);
        });
        it('should calculate price with discount of the book and return it with a message', () => {
            let returnMsg = `Price of Alice is 10.00`;
            assert.equal(library.calcPriceOfBook("Alice", 1970), returnMsg);
        });
    });

//TO DO:








});