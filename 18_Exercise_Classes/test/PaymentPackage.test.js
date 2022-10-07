let PaymentPackage = require('../12_PaymentPackage');
let {assert} = require('chai');

describe("PaymentPackage", () => {
    describe("create instance", () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Todor", 10);
        });
        it("name should be correct", () => {
            assert.equal(paymentPackage._name, "Todor", "name was correct set to Todor");
        });
        it("value should be positive number", () => {
            assert.equal(paymentPackage._value, 10, "value was correct set to 10");
        });

        // TODO:

    })
})