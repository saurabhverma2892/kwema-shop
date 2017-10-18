"use strict";

module.exports = app => {

    let shopService = app.services.shopService;

    function getDesignsAndRenderShop(req,res,next){
        shopService.getAllDesigns().then(data=>{
            res.render("shop", {designs:data});
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
            res.render("plans",{products:data, product:data.productData});
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
            res.render("cart", {cartDetails:data});
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
        if(!req.session.cart){
            req.session.cart=[];
        }
        shopService.getPlanDetailsForEachCartItem(req).then(data=>{
            res.render("cart", {cartDetails:data, user:req.user});
        })
    }

    return {
        getDesignsAndRenderShop,
        getProductsForDesignId,
        getCartDetailsByPlanId,
        getPlanDetailsForEachCartItem,
        getCartDetails
    }
}