let cinema = require('../cinema');
let {assert} = require('chai');

describe("Test for cinema", () => {
    describe("Test showMovies(movieArr)", () => {
        it('should return a message that the arr length is zero', () => {
            let returnMsg = `There are currently no movies to show.`;
            assert.equal(cinema.showMovies([]), returnMsg);
        });
        it('should return the available movies, separated by a comma and space', () => {
            assert.equal(cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"]), "King Kong, The Tomorrow War, Joker");
        });
    });

    describe("Test ticketPrice(projectionType)", () => {
        it('should throw a new Error if the projection type is not presented in the schedule', () => {
            let errMsg = `Invalid projection type.`;
            assert.throw(() => cinema.ticketPrice("something"), errMsg);
        });
        it('should return the price if the projprojectionect type is presented in the schedule', () => {
            assert.equal(cinema.ticketPrice("Premiere"), 12.00);
            assert.equal(cinema.ticketPrice("Normal"), 7.50);
            assert.equal(cinema.ticketPrice("Discount"), 5.50);
        });
    });

    describe("Test swapSeatsInHall(firstPlace, secondPlace)", () => {
        it('should return a msg if input is not an integer, if negative, zero or greater than the hall capacity', () => {
            let returnMsg = `Unsuccessful change of seats in the hall.`;
            assert.equal(cinema.swapSeatsInHall("13", "14"), returnMsg);
            assert.equal(cinema.swapSeatsInHall(13, "14"), returnMsg);
            assert.equal(cinema.swapSeatsInHall("13", 14), returnMsg);
            assert.equal(cinema.swapSeatsInHall(13, 14.5), returnMsg);
            assert.equal(cinema.swapSeatsInHall(13.5, 14), returnMsg);
            assert.equal(cinema.swapSeatsInHall([13], [14]), returnMsg);
            assert.equal(cinema.swapSeatsInHall([13], 14), returnMsg);
            assert.equal(cinema.swapSeatsInHall(13, [14]), returnMsg);
            assert.equal(cinema.swapSeatsInHall({}, 14), returnMsg);
            assert.equal(cinema.swapSeatsInHall(13, {}), returnMsg);

            assert.equal(cinema.swapSeatsInHall(13, 0), returnMsg);
            assert.equal(cinema.swapSeatsInHall(0, 14), returnMsg);
            assert.equal(cinema.swapSeatsInHall(-13, 14), returnMsg);
            assert.equal(cinema.swapSeatsInHall(13, -14), returnMsg);
            assert.equal(cinema.swapSeatsInHall(23, 14), returnMsg);
            assert.equal(cinema.swapSeatsInHall(13, 24), returnMsg);
        });
        it('should return msg for successful change of seats in the hall', () => {
            let returnMsg = `Successful change of seats in the hall.`;
            assert.equal(cinema.swapSeatsInHall(13, 14), returnMsg);
            assert.equal(cinema.swapSeatsInHall(2, 20), returnMsg);
        });
    });
});