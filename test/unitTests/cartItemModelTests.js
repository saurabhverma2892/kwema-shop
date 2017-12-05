"use strict";

let cartIteamModel = app.models.cartitem;

describe("Client model test", () => {

    describe("Create Cart Item", () => {
        let cartItemDetails  = {
            "planId":1,
            "quantity":1,
            "planType":"monthly"
        };

        let user = {
            id:1
        }

        it("should create a cart item", done => {
            cartIteamModel.addCartItem(user,1,cartItemDetails).then(result => {
                expect(result).to.be.a("object");
                done();
            });
        });
    });


});