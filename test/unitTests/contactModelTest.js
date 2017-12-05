"use strict";

let contactModel = app.models.contact;

describe("Client model test", () => {

    describe("create a contact query by partners", () => {
        let query  = {
            name:"saurabh",
            email:"saurabh.verma2892@gmail.com",
            message:"this is a test"        
        };

        it("should create a contact query by partners", done => {
            contactModel.sendQuery(query).then(result => {
                expect(result).to.be.a("object");
                done();
            });
        });
    });


});