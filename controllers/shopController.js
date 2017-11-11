"use strict";

module.exports = app => {

    let shopService = app.services.shopService;

    function getDesignsAndRenderShop(req,res,next){
        shopService.getAllDesigns(req.session.currency).then(data=>{
            console.log(data);
            res.render("shop", {designs:data, language:req.userlanguage});
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function getProductsForDesignId(req,res,next){
        console.log("working in getProductsForDesignId");
        shopService.getProductsForDesignId(req.query).then(data=>{
            res.render("plans",{products:data, product:data.productData,language:req.userlanguage});
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function getCartDetailsByPlanId(req,res,next){
        console.log("workign in get cart details");
        shopService.getCartDetailsByPlanId(req.user.planId).then(data=>{
            res.render("cart", {cartDetails:data,language:req.userlanguage});
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function getPlanDetailsForEachCartItem(req,res,next){
        console.log("getPlanDetailsForEachCartItem");
        shopService.getPlanDetailsForEachCartItem(req, req.session.currency).then(data=>{
            console.log(data);
            res.send(data);
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function getCartDetails(req,res,next){
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
            var user={};
            if(req.user){
                user=req.user;
            }
            shopService.getPlanDetailsForEachCartItem(req, req.session.currency).then(data=>{
                res.render("cart", {cartDetails:data, user:user,language:req.userlanguage});
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
            shopService.getPlanDetailsForEachCartItem(req, req.session.currency).then(data=>{
                res.render("paybycard", {cartDetails:data, user:req.user,language:req.userlanguage});
            });
        }
    }

    function saveUserCardInfoAndMakeCharge(req,res,next){
        shopService.getPlanDetailsForEachCartItem(req, req.session.currency).then(cartItems=>{
            shopService.saveUserCardInfoAndMakeCharge(cartItems,req.body,req.user).then(data=>{
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
            shopService.getPlanDetailsForEachCartItem(req, req.session.currency).then(data=>{
                req.session.save(function(err) {
                  // session saved
                    res.render("paybycompropago", {cartDetails:data, user:req.user,language:req.userlanguage});
                })
            });
        }
    }

    function saveCashPaymentCart(req,res,next){
        console.log("wokring in here");
        console.log(req.session.cart);
        console.log(req.session);
        shopService.getPlanDetailsForEachCartItem(req, req.session.currency).then(cartItems=>{
            shopService.saveComproTransaction(cartItems,req.user).then(data=>{
                console.log("transacted well");
                res.send(true);
            }).catch(err=>{
                console.log(err);
                next(err);
            })
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function successComroPayment(req,res,next){
        req.session.cart=[];
        res.redirect("/shop/kwema-app");
    }

    function addWebHookNotification(req,res,next){
        console.log("working in web hook notification");
        shopService.addWebHookNotification(req.body).then(data=>{
            console.log("everthing worked well in web hook");
            var resJson = {
              "status": "success",  
              "short_id": req.body.short_id,
              "message": "OK",
              "reference": data.id
            }
            res.send(resJson);

            //res.json(resJson);
        }).catch(err=>{
            console.log(err);

            var resJson = {
              "status": "error",  
              "short_id": req.body.short_id,
              "message": err,
              "reference": null
            }
            res.status(500);
            res.send(resJson);
        })
    }

    function getProductsPage(req,res,next){
        shopService.getProductsForDesignName(req.params.designName, req.session.currency).then(data=>{
            console.log(data.products);
            res.render("products", {products:data.products, language:req.userlanguage, categoryName:req.params.designName, design:data});
        })
    }

    function getItemPage(req,res,next){
        /*shopService.getProductsForDes(req.params.productName).then(data=>{
            console.log(data);
            res.render("plans",{products:data, product:data.productData,language:req.userlanguage});
        })*/
        shopService.getProductsForDesignName(req.params.designName, req.session.currency).then(data=>{
            console.log("worked here");
            console.log(data.products);
            console.log("=======");
            console.log(req.params.designName);
            var products = data.products;
            shopService.getProductByProductAndDesignName(req.params.productName,data.id, req.session.currency).then(product=>{
                var product = product;
                
                res.render("plans",{design:data ,products:products, product:product,language:req.userlanguage});
            }).catch(err=>{
                next(err);
            })
        }).catch(err=>{
            next(err);
        })
    }

    function getPlansForProduct(req,res,next){
        shopService.getProductsForDesignName(req.params.designName, req.session.currency).then(data=>{
            shopService.getProductByProductAndDesignName(req.params.productName,data.id,req.session.currency).then(product=>{
                console.log(product);
                res.render("plansForProduct",{design:data ,product:product,language:req.userlanguage});
            }).catch(err=>{
                next(err);
            })
        }).catch(err=>{
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
        successComroPayment,
        addWebHookNotification,
        saveCashPaymentCart,
        getProductsPage,
        getItemPage,
        getPlansForProduct
    }
}