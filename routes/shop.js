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

    router.route("/login").post((req,res,next)=>{
        res.redirect("/shop/cart");
    })

    return router;
}

