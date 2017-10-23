"use strict"

let router = require("express").Router();

module.exports = app => {

    let contactController = app.controllers.contactController;
    
    router.route("/partner").post((req,res,next)=>{
        contactController.sendQuery(req,res,next);
    })
    

    return router;
}

