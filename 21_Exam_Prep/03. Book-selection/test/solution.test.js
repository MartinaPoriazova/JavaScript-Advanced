let bookSelection = require('../solution');
let {assert} = require('chai');

describe("Tests for bookSelection", function() {
    describe("Test isGenreSuitable", function() {
        function concatStr(genre, age) {
            return `Books with ${genre} genre are not suitable for kids at ${age} age`;
        }
        it("wrong genre", () => {
            let expectedText = concatStr("Thriller", 12);
            
            assert.equal(bookSelection.isGenreSuitable("Thriller", 12), expectedText);
            expectedText = concatStr("Horror", 12);
            assert.equal(bookSelection.isGenreSuitable("Horror", 12), expectedText);
        });
        it("correct genre", () => {
            let expText = `Those books are suitable`;
            assert.equal(bookSelection.isGenreSuitable("Thriller", 13), expText);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 25), expText);
            assert.equal(bookSelection.isGenreSuitable("Horror", 13), expText);
            assert.equal(bookSelection.isGenreSuitable("Horror", 25), expText);
        });
     });


     describe("Test isItAffordable", function() {
        it("Don`t have enough money", () => {
            assert.equal(bookSelection.isItAffordable(11, 10), "You don't have enough money");
            assert.equal(bookSelection.isItAffordable(55, 51), "You don't have enough money");
        });
        it("Bought book", () => {
            assert.equal(bookSelection.isItAffordable(10, 11), `Book bought. You have 1$ left`);
            assert.equal(bookSelection.isItAffordable(10, 10), `Book bought. You have 0$ left`);
            assert.equal(bookSelection.isItAffordable(10, 50), `Book bought. You have 40$ left`);
        });
        it("Wrong data type", () => {
            assert.throw(function() {bookSelection.isItAffordable("Pesho", 10)}, "Invalid input");
            assert.throw(function() {bookSelection.isItAffordable("Pesho", "10")}, "Invalid input");
            assert.throw(function() {bookSelection.isItAffordable("10", "10")}, "Invalid input");
            assert.throw(function() {bookSelection.isItAffordable(10, "10")}, "Invalid input");
        });
     });

     describe("Test suitableTitles", function() {
        it("wrong data type", () => {
            assert.throw(() => bookSelection.suitableTitles("gosho", "pesho"), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles(10, "pesho"), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles({}, "pesho"), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], []), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], {}), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles({}, {}), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles(10, 10), "Invalid input");        
        });
        it("correct data", () => {
            let input = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "Children of the corn", genre: "Horror" },
                { title: "Scream", genre: "Horror" }
            ];
            let result = ["Children of the corn", "Scream"];
            assert.equal(bookSelection.suitableTitles(input, "Horror").join(" "), result.join(" "));
            result = [];
            assert.equal(bookSelection.suitableTitles(input, "Comedy").join(" "), result.join(" "));

        });
     });
});
