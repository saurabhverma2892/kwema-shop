"use strict"

let router = require("express").Router();

module.exports = app => {

    router.route("/").get((req,res,next)=>{
        res.render("shop");
    })
    router.route("/plans").get((req,res,next)=>{
        res.render("plans");
    })
    router.route("/login").get((req,res,next)=>{
        res.render("login");
    })
    router.route("/cart").get((req,res,next)=>{
        res.render("cart");
    })
    router.route("/kwema-app").get((req,res,next)=>{
        res.render("getapp");
    })


    router.route("/login").post((req,res,next)=>{
        res.redirect("/shop/cart");
    })
    router.route("/paynow").post((req,res,next)=>{
        res.redirect("/shop/kwema-app");
    })

    return router;
}

