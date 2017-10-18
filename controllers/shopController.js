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

    return {
        getDesignsAndRenderShop,
        getProductsForDesignId,
        getCartDetailsByPlanId
    }
}