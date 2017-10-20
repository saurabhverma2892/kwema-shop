"use strict";

module.exports = app => {

    let shopService = app.services.shopService;

    function getDesignsAndRenderShop(req,res,next){
        shopService.getAllDesigns().then(data=>{
            res.render("shop", {designs:data, language:req.userlanguage});
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function getProductsForDesignId(req,res,next){
        console.log("working in getProductsForDesignId");
        console.log(req.query);
        shopService.getProductsForDesignId(req.query).then(data=>{
            console.log(data);
            res.render("plans",{products:data, product:data.productData,language:req.userlanguage});
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function getCartDetailsByPlanId(req,res,next){
        console.log("workign in get cart details");
        shopService.getCartDetailsByPlanId(req.user.planId).then(data=>{
            console.log("detailsss");
            console.log(data);
            res.render("cart", {cartDetails:data,language:req.userlanguage});
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function getPlanDetailsForEachCartItem(req,res,next){
        console.log("getPlanDetailsForEachCartItem");
        shopService.getPlanDetailsForEachCartItem(req).then(data=>{
            res.send(data);
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function getCartDetails(req,res,next){
        console.log("cartttt");
        console.log(req.session.cart);
        if(!req.session.cart){
            req.flash("message","Please add items to cart first");
            res.redirect("/shop");
        }
        else if(req.session.cart.length<1){
            req.flash("message","Please add items to cart first");
            res.redirect("/shop");
        }
        else
        {
            shopService.getPlanDetailsForEachCartItem(req).then(data=>{
                res.render("cart", {cartDetails:data, user:req.user,language:req.userlanguage});
            })
        }
        
    }

    function addShippingInfoToUser(req,res,next){
        shopService.addShippingInfo(req.body, req.user).then(data=>{
            res.redirect("/shop/pay/card");
        }).catch(err=>{
            console.log(err);
            return reject(err);
        })
    }

    function getPaymentPage(req,res,next){
        if(!req.session.cart){
            req.flash("message","Please add items to cart first");
            res.redirect("/shop");
        }
        else if(req.session.cart.length<1){
            req.flash("message","Please add items to cart first");
            res.redirect("/shop");
        }
        else
        {
            shopService.getPlanDetailsForEachCartItem(req).then(data=>{
                res.render("paybycard", {cartDetails:data, user:req.user,language:req.userlanguage});
            });
        }
    }

    function saveUserCardInfoAndMakeCharge(req,res,next){
        shopService.getPlanDetailsForEachCartItem(req).then(cartItems=>{
            shopService.saveUserCardInfoAndMakeCharge(cartItems,req.body,req.user).then(data=>{
                console.log(data);
                req.session.cart=[];
                res.redirect("/shop/kwema-app");
            }).catch(err=>{
                console.log(err);
                next(err);
            })
        }).catch(err=>{
            console.log(err);
            next(err);
        })
        
    }

    function getPaymentByCashPage(req,res,next){
        if(!req.session.cart){
            req.flash("message","Please add items to cart first");
            res.redirect("/shop");
        }
        else if(req.session.cart.length<1){
            req.flash("message","Please add items to cart first");
            res.redirect("/shop");
        }
        else
        {
            shopService.getPlanDetailsForEachCartItem(req).then(data=>{
                res.render("paybycompropago", {cartDetails:data, user:req.user,language:req.userlanguage});
            });
        }
    }

    function successComroPayment(req,res,next){
        shopService.getPlanDetailsForEachCartItem(req).then(cartItems=>{
            shopService.saveComproTransaction(cartItems,req.user).then(data=>{
                res.redirect("/shop/kwema-app");
            })
        }).catch(err=>{
            console.log(err);
            next(err);
        })
        
    }

    

    return {
        getDesignsAndRenderShop,
        getProductsForDesignId,
        getCartDetailsByPlanId,
        getPlanDetailsForEachCartItem,
        getCartDetails,
        addShippingInfoToUser,
        getPaymentPage,
        saveUserCardInfoAndMakeCharge,
        getPaymentByCashPage,
        successComroPayment
    }
}