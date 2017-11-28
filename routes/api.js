"use strict"

let router = require("express").Router();

module.exports = app => {

    let apiController = app.controllers.apiController;
    
    router.route("/products").get((req,res,next)=>{
        apiController.getAllProducts(req,res,next);
    })

    router.route("/products/update").post((req,res,next)=>{
        apiController.updateProduct(req,res,next);
    })

    router.route("/products/delete").post((req,res,next)=>{
        console.log(req.body);
        apiController.deleteProduct(req,res,next);
    })

    router.route("/designs").get((req,res,next)=>{
        apiController.getAllDesigns(req,res,next);
    })

    router.route("/designs/update").post((req,res,next)=>{
        console.log(req.body);
        apiController.updateDesign(req,res,next);
    })

    router.route("/designs/add").post((req,res,next)=>{
        console.log(req.body);
        apiController.addNewDesign(req,res,next);
    })

    router.route("/products/add").post((req,res,next)=>{
        apiController.addNewProduct(req,res,next);
    })
    

    return router;
}

