"use strict";

let productsModel = app.models.product;

describe("Client model test", () => {

    describe("Get all products by currency", () => {
        let currency  = {
        };

        it("should fetch all products by currency", done => {
            productsModel.getAllProducts("USD").then(result => {
                expect(result).to.be.a("array");
                done();
            });
        });
    });

    describe("Get all products by design Id", () => {
        let designId  = {
        };

        it("should fetch all products by design id", done => {
            productsModel.getAllProducts(1).then(result => {
                expect(result).to.be.a("array");
                done();
            });
        });
    });

    describe("Get all products by product Id", () => {
        let designId  = {
        };

        it("should fetch product by product id", done => {
            productsModel.getProductById(5).then(result => {
                expect(result).to.be.a("object");
                done();
            });
        });
    });

    describe("get Product By Name And Design", () => {
        let designId  = {
        };

        it("should fetch product by product id", done => {
            productsModel.getProductByNameAndDesign("All Black Everything",2,"USD").then(result => {
                expect(result).to.be.a("object");
                done();
            });
        });
    });

    describe("get Product By Id For Christmas", () => {
        let designId  = {
        };

        it("should fetch product by product id for christmas", done => {
            productsModel.getProductByIdForChristmas("USD",5).then(result => {
                expect(result).to.be.a("array");
                done();
            });
        });
    });

    describe("get All Products For Admin", () => {
        let designId  = {
        };

        it("should fetch all products for admin", done => {
            productsModel.getAllProductsForAdmin().then(result => {
                expect(result).to.be.a("array");
                done();
            });
        });
    });

});