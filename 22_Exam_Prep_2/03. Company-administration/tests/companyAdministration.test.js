let companyAdministration = require('../companyAdministration');
let {assert} = require('chai');

describe("Tests for companyAdministration", () => {
    describe("Test hiringEmployee (name, position, yearsExperience)", () => {
        it('should throw an error if position is different than "Programmer"', () => {
            let errMsg = "We are not looking for workers for this position.";
            assert.throw(() => companyAdministration.hiringEmployee("Gosho", "DifferentPosition", 4), errMsg);
        });
        it('shoud succeed if years experience are greater than or equal to 3', () => {
            let hiredMsg = "Gosho was successfully hired for the position Programmer.";
            assert.equal(companyAdministration.hiringEmployee("Gosho", "Programmer", 3), hiredMsg);
            assert.equal(companyAdministration.hiringEmployee("Gosho", "Programmer", 4), hiredMsg);
        });
        it('should fail if years experience are under 3', () => {
            let notHiredMsg = "Gosho is not approved for this position.";
            assert.equal(companyAdministration.hiringEmployee("Gosho", "Programmer", 2), notHiredMsg);
            assert.equal(companyAdministration.hiringEmployee("Gosho", "Programmer", 0), notHiredMsg);
        });
    });

    describe("Test calculateSalary (hours)", () => {
        it('should throw an error if input is negative number or not a number', () => {
            let errMsg = "Invalid hours";
            assert.throw(() => companyAdministration.calculateSalary(-10), errMsg);
            assert.throw(() => companyAdministration.calculateSalary("10"), errMsg);
        });
        it('should calculate the salary by valid input', () => {
            assert.equal(companyAdministration.calculateSalary(0), 0);
            assert.equal(companyAdministration.calculateSalary(1), 15);
            assert.equal(companyAdministration.calculateSalary(15), 15 * 15);
            assert.equal(companyAdministration.calculateSalary(160), 160 * 15);
        });
        it('should calculate the total amount with a bonus if working hours are more than 160', () => {
            assert.equal(companyAdministration.calculateSalary(161), 161 * 15 + 1000);
            assert.equal(companyAdministration.calculateSalary(200), 200 * 15 + 1000);
        });
    });

    describe("Test firedEmployee (employees, index)", () => {
        it('should throw an error if the input is invalid', () => {
            let errMsg = "Invalid input";
            assert.throw(() => companyAdministration.firedEmployee("Pesho", 0), errMsg);
            assert.throw(() => companyAdministration.firedEmployee("{}", 1), errMsg);
            assert.throw(() => companyAdministration.firedEmployee(1, 2), errMsg);
            assert.throw(() => companyAdministration.firedEmployee(1, "2"), errMsg);
            assert.throw(() => companyAdministration.firedEmployee(["Todor"], 2), errMsg);
            assert.throw(() => companyAdministration.firedEmployee(["Todor", "Ivan"], "0"), errMsg);
            assert.throw(() => companyAdministration.firedEmployee(["Todor"], -1), errMsg);
            assert.throw(() => companyAdministration.firedEmployee(["Todor", "Ivan"], "{}"), errMsg);
        });
        it('should remove an element from given index', () => {
            assert.equal(companyAdministration.firedEmployee(["Todor"], 0), "");
            assert.equal(companyAdministration.firedEmployee(["Todor", "Gosho"], 0), "Gosho");
            assert.equal(companyAdministration.firedEmployee(["Todor", "Gosho", "Pesho"], 0), "Gosho, Pesho");
            assert.equal(companyAdministration.firedEmployee(["Todor", "Gosho", "Pesho"], 1), "Todor, Pesho");
            assert.equal(companyAdministration.firedEmployee(["Todor", "Gosho", "Pesho"], 2), "Todor, Gosho");
        });
    });
});
