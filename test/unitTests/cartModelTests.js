"use strict";

let cartmodel = app.models.cart;

describe("Client model test", () => {

    describe("Create Cart", () => {
        let currency  = {
        };

        it("should create a cart", done => {
            cartmodel.addNewCart(1).then(result => {
                expect(result).to.be.a("object");
                done();
            });
        });
    });


});