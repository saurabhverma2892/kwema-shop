"use strict"

let router = require("express").Router();

module.exports = app => {

    let shopController = app.controllers.shopController;
    let passport = app.auth.passport;

    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/shop/login');
    }

    router.route("/").get((req,res,next)=>{
        shopController.getDesignsAndRenderShop(req,res,next);
    })
    router.route("/plans").get((req,res,next)=>{
        shopController.getProductsForDesignId(req,res,next);
    })
    router.route("/login").get((req,res,next)=>{
        res.render("login");
    })
    router.route("/cart").get(isLoggedIn, (req,res,next)=>{
        //todo by cart Id
        shopController.getCartDetails(req,res,next)
        //res.render("cart");
    })

    router.route("/pay/card").get(isLoggedIn, (req,res,next)=>{
        shopController.getPaymentPage(req,res,next)
    })
    router.route("/kwema-app").get((req,res,next)=>{
        res.render("getapp");
    })

    router.route("/checkout").get(isLoggedIn,(req,res,next)=>{
        res.redirect("/shop/cart");
    })

    router.route("/paynow").post((req,res,next)=>{
        res.redirect("/shop/kwema-app");
    })

    router.route("/shipping").post(isLoggedIn,(req,res,next)=>{
        shopController.addShippingInfoToUser(req,res,next);
    })

    router.route("/pay/card/charge").post(isLoggedIn,(req,res,next)=>{
        shopController.saveUserCardInfoAndMakeCharge(req,res,next);
    })

    router.route("/usercart").post((req,res,next)=>{
        var usercartdetails = req.body;
        if(!req.session.cart){
            req.session.cart=[];
        }
        req.session.cart.push(usercartdetails);
        shopController.getPlanDetailsForEachCartItem(req,res,next);
        //res.send(req.session.cart);
    })

    router.route("/usercart").get((req,res,next)=>{
        if(!req.session.cart){
            req.session.cart=[];
        }
        shopController.getPlanDetailsForEachCartItem(req,res,next);
        //res.send(req.session.cart);
    })

    router.route("/login").post(passport.authenticate('local-login',{
        successRedirect : '/shop/cart', // redirect to the secure profile section
        failureRedirect : '/shop/login', // redirect back to the signup page if there is an error
        failureFlash : true
    }))

    router.route("/register").post(passport.authenticate('local-signup',{
        successRedirect : '/shop/cart', // redirect to the secure profile section
        failureRedirect : '/shop/login', // redirect back to the signup page if there is an error
        failureFlash : true 
    }))

    return router;
}

