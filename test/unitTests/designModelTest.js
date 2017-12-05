"use strict";

let designModel = app.models.design;

describe("Client model test", () => {

    describe("get all designs", () => {
        
        it("get all designs", done => {
            designModel.getAllDesigns("USD").then(result => {
                expect(result).to.be.a("array");
                done();
            });
        });
    });

    describe("get designs by name", () => {
        it("get all designs", done => {
            designModel.getDesignByName("Eve","USD").then(result => {
                expect(result).to.be.a("object");
                done();
            });
        });

    });

    /*describe("update Design details", () => {
            
        let params = {
            name:"Eve",
            details:"this is new test details",
            id:1
        }

        it("update Design details", done => {
            designModel.updateDesign(params).then(result => {
                expect(result).to.be.a("array");
                done();
            });
        });

    });*/




});