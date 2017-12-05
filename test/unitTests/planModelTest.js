"use strict";

let planModel = app.models.plan;

describe("Plans model test", () => {

    describe("Get cart details by plan id", () => {

        it("should Get cart details by plan id", done => {
            planModel.getCartDetailsByPlanId(1).then(result => {
                expect(result).to.be.a("object");
                done();
            });
        });
    });

    describe("Get plan details by plan id", () => {

        it("should get plan details by plan id", done => {
            planModel.getPlanById(1, "USD").then(result => {
                expect(result).to.be.a("object");
                done();
            });
        });
    });


});