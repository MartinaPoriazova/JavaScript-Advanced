let library = require('../library');
let {assert} = require('chai');
const { findBook } = require('../library');

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

    describe("Test findBook(booksArr, desiredBook)", () => {
        it('should throw a new Error if the bookArr is empty', () => {
            let errMsg = `No books currently available`;
            assert.throw(() => library.findBook([], "Troy"), errMsg);
        });
        it('should return a message that the book is presented in the bookArr', () => {
            let returnMsg = `We found the book you want.`;
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Troy"), returnMsg);
        });
        it('should throw a new Error if the book is not presented in the bookArr', () => {
            let errMsg = `The book you are looking for is not here!`;
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Lollita"), errMsg);
        });
    });

    describe("Test arrangeTheBooks(countBooks)", () => {
        it('should throw a new Error if input is not valid', () => {
            let errMsg = `Invalid input`;
            assert.throw(() => library.arrangeTheBooks("5"), errMsg);
            assert.throw(() => library.arrangeTheBooks([5]), errMsg);
            assert.throw(() => library.arrangeTheBooks(5.55), errMsg);
            assert.throw(() => library.arrangeTheBooks(-5), errMsg);
            assert.throw(() => library.arrangeTheBooks({}), errMsg);
        });
        it('should return a message if there is enough space and books are arranged', () => {
            let returnMsg = `Great job, the books are arranged.`;
            assert.equal(library.arrangeTheBooks(25), returnMsg);
        });
        it('should return a message if there is enough space and books are arranged', () => {
            let returnMsg = `Great job, the books are arranged.`;
            assert.equal(library.arrangeTheBooks(40), returnMsg);
        });
        it('should return a message if there is enough space and books are arranged', () => {
            let returnMsg = `Insufficient space, more shelves need to be purchased.`;
            assert.equal(library.arrangeTheBooks(41), returnMsg);
            assert.equal(library.arrangeTheBooks(101), returnMsg);
        });
    });
});