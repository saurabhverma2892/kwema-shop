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
        res.render("login", {language:req.userlanguage});
    })
    router.route("/cart").get(isLoggedIn, (req,res,next)=>{
        //todo by cart Id
        shopController.getCartDetails(req,res,next)
        //res.render("cart");
    })

    router.route("/pay/card").get(isLoggedIn, (req,res,next)=>{
        shopController.getPaymentPage(req,res,next)
    })
    router.route("/pay/cash").get(isLoggedIn, (req,res,next)=>{
        shopController.getPaymentByCashPage(req,res,next)
    })
    router.route("/kwema-app").get((req,res,next)=>{
        res.render("getapp",{language:req.userlanguage});
    })

    router.route("/checkout").get(isLoggedIn,(req,res,next)=>{
        res.redirect("/shop/cart");
    })

    router.route("/paynow").post((req,res,next)=>{
        res.redirect("/shop/kwema-app");
    })

    router.route("/pay/cash/failure").get((req,res,next)=>{
        console.log(req.query);
        console.log(req.body);
        console.log(req.params);
    })
    router.route("/pay/cash/success").get((req,res,next)=>{
        console.log(req.query);
        console.log(req.body);
        console.log(req.params);
        console.log(req);
        shopController.successComroPayment(req,res,next);
        
    })

    router.route("/shipping").post(isLoggedIn,(req,res,next)=>{
        shopController.addShippingInfoToUser(req,res,next);
    })

    router.route("/pay/card/charge").post(isLoggedIn,(req,res,next)=>{
        shopController.saveUserCardInfoAndMakeCharge(req,res,next);
    })

    router.route("/checkout").post((req,res,next)=>{
        console.log(req.body);
        if(!req.session.cart){
            req.session.cart=[];
        }
        var carToAdd=[];

        var planIds = [];
        var planTypes = [];
        var quantities = [];

        console.log(typeof req.body.planId);
        if(Object.prototype.toString.call( req.body.planId )  == '[object Array]'){
            planIds = req.body.planId;
            planTypes = req.body.planType;
            quantities = req.body.quantity;
        }
        else{
            planIds.push(req.body.planId);
            planTypes.push(req.body.planType);
            quantities.push(req.body.quantity);
        }

        var i = 0;
        var error = false;
        
        planIds.forEach(planId=>{

            if(((planTypes[i] == "monthly" || planTypes[i] == "yearly") && (typeof planId=="string") && (quantities[i]>0))){
                carToAdd.push({planId:planId,planType:planTypes[i],quantity:quantities[i]})
            }
            else
            {
                console.log("ajsdhfkjsahdf");
                error = true;
            }

            i++;
        })

        if(!error){
            req.session.cart=carToAdd;
            res.redirect("/shop/cart");
        }
        else{
            console.log("ehhehehehajsdfaskhdfjkasdfhsadf");
            req.flash("message","Error in form data");
            res.redirect("/shop");
        }
        
    })

    router.route("/usercart").post((req,res,next)=>{
        var usercartdetails = req.body;
        if(!req.session.cart){
            req.session.cart=[];
        }
        var i = 0;
        console.log(usercartdetails);
        usercartdetails.planType.forEach(type=>{
            console.log(type);
            console.log("hehre is the type");
            if(type == "monthly" || type =="yearly"){
                req.session.cart.push({planType:type, planId:usercartdetails.planId[i],quantity:1})
            }
            else{
                console.log("no");
            }
            i++
        })
        console.log("all good");
        console.log(req.session.cart);
        //req.session.cart.push(usercartdetails);
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

    router.route("/pay/cash/listener").post((req,res,next)=>{
        console.log(req.body);
        shopController.addWebHookNotification(req,res,next);
    })

    return router;
}

