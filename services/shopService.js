"use strict";

module.exports = app => {
    let Design = app.models.design;
    let Product = app.models.product;
    let Plan = app.models.plan;
    let User = app.models.user;
    let Transaction = app.models.transaction;
    let Cart = app.models.cart;
    let CartItem = app.models.cartitem;

    let stripeService = app.services.stripeService;

    function getAllDesigns(currency){
        return new Promise((resolve,reject)=>{
            Design.getAllDesigns(currency).then(data=>{
                return resolve(data);
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    function getProductsForDesignId(params){
        var designId = params.id;
        var productId = params.productId;

        return new Promise((resolve,reject)=>{
            Product.getProductsForDesignId(designId).then(data=>{
                if(!productId){
                    Product.getFirstProductByDesignId(designId).then(productData=>{
                        data.productData=productData;
                        return resolve(data);
                    }).catch(err=>{
                        return reject(err);
                    })
                }
                else
                {
                    Product.getProductById(productId).then(productData=>{
                        data.productData=productData;
                        return resolve(data);
                    }).catch(err=>{
                        return reject(err);
                    })
                }
                
            }).catch(err=>{
                return reject(err);
            })
            
        })
    }

    function getCartDetailsByPlanId(planId){
        console.log("workign in service");

        return new Promise((resolve,reject)=>{
            Plan.getCartDetailsByPlanId(planId).then(data=>{
                console.log("yay data")
                return resolve(data)
            }).catch(err=>{
                console.log("error coming");
                return reject(err);
            })
        })
    }

    function getPlanDetailsForEachCartItem(req, currency){
        var promises = [];
        return new Promise((resolve,reject)=>{
            var i = 0;
            req.session.cart.forEach(cartItem=>{
                var promisePlan = new Promise((resolve2,reject2)=>{
                    Plan.getPlanById(cartItem.planId, currency).then(data=>{
                        cartItem.planDetails=data;
                        if(req.session.discount){
                            cartItem.discount=req.session.discount;
                        }
                        return resolve2(cartItem);
                    }).catch(err=>{
                        return reject(err);
                    })
                })
                promises.push(promisePlan);
            });

            Promise.all(promises).then(data=>{
                console.log("resolved all");
                return resolve(data);
            })
            
        })
    }

    function addShippingInfo(params, user){
        return new Promise((resolve,reject)=>{
            User.addShippingInfo(params,user).then(data=>{
                return resolve(data);
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    function saveUserCardInfoAndMakeCharge(cartItems, params, user, discount){
        var promises = [];
        var amount = 0;

        return new Promise((resolve,reject)=>{
            Cart.addNewCart(user).then(cartCreated=>{
                cartItems.forEach(cartItemDetails=>{
                    var planAmount = 0;
                    var transportPrice = 0;
                    if(cartItemDetails.planType=="monthly"){
                        planAmount = cartItemDetails.planDetails.monthlyPrice;
                    }
                    if(discount=="xmas"){
                        planAmount=0;
                        transportPrice=5;
                    }
                    var itemPrice=cartItemDetails.planDetails.design.currencies[0].value;
                    if(discount){
                        console.log("working in discounts");
                        console.log(cartItemDetails.planDetails.design.discounts[0].currencies[0].value);
                        itemPrice = cartItemDetails.planDetails.design.discounts[0].currencies[0].value;
                    }
                    amount = amount+planAmount+itemPrice+transportPrice;
                    console.log("planAmount is "+planAmount);
                    console.log("itemPrice is "+itemPrice);
                    console.log("total amount is");
                    console.log(amount);
                    var cartPromise = CartItem.addCartItem(user,cartCreated.id,cartItemDetails);
                    promises.push(cartPromise);
                })
                Promise.all(promises).then(cartItemsData=>{
                    console.log("resolved all");
                    stripeService.getUserDetails(params.stripeToken,user).then(paymentInfo=>{
                        User.savePaymentInfo(paymentInfo.id,user).then(response=>{
                            stripeService.chargeUser(amount,paymentInfo.id).then(transactionInfo=>{
                                Transaction.addTransaction(transactionInfo,user,cartCreated.id).then(data=>{
                                    console.log("transaction added");
                                    return resolve(transactionInfo);
                                }).catch(err=>{
                                    return reject(err);
                                })
                            }).catch(err=>{
                                return reject(err);
                            })
                        }).catch(err=>{
                            return reject(err);
                        })
                    });
                }).catch(err=>{
                    return reject(err);
                })
            });
        })
    }

    function saveComproTransaction(cartItems,user){
        var promises = [];
        var amount = 0;
        return new Promise((resolve,reject)=>{
            Cart.addNewCart(user).then(cartCreated=>{
                cartItems.forEach(cartItemDetails=>{
                    console.log("all good here too");
                    var planAmount = 0;
                    if(cartItemDetails.planType=="monthly"){
                        planAmount = cartItemDetails.planDetails.monthlyPrice;
                    }
                    else if(cartItemDetails.planType=="yearly"){
                        planAmount = cartItemDetails.planDetails.yearlyPrice;
                    }
                    amount = amount+planAmount+cartItemDetails.planDetails.devicePrice;
                    var cartPromise = CartItem.addCartItem(user,cartCreated.id,cartItemDetails);
                    promises.push(cartPromise);
                    console.log("all pushed");
                });
                Promise.all(promises).then(cartItemsData=>{
                    console.log("resolved all in compro pago");
                    Transaction.addTransactionForCompro(amount,user,cartCreated.id).then(data=>{
                        return resolve(data);
                    }).catch(err=>{
                        return reject(err);
                    })
                }).catch(err=>{
                    return reject(err);
                })
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    function addWebHookNotification(params){
        return new Promise((resolve,reject)=>{
            Transaction.updateTransactionForCompro(params).then(data=>{
                return resolve(data);
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    function getProductsForDesignName(name, currency){
        return Design.getDesignByName(name, currency);
    }

    function getProductByProductAndDesignName(productName,designId,currency){
        console.log("all good");
        return Product.getProductByNameAndDesign(productName,designId,currency);
    }

    function getAllProducts(currency){
        return Product.getAllProducts(currency);
    }


    /*xmas*/

    function getProductByIdForChristmas(currency,id){
        return new Promise((resolve,reject)=>{
            Product.getProductByIdForChristmas(currency,id).then(data=>{
                data.forEach(cartDetails=>{
                    cartDetails.planDetails=cartDetails.plans[0];
                })

                return resolve(data);
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    return {
        getAllDesigns,
        getProductsForDesignId,
        getCartDetailsByPlanId,
        getPlanDetailsForEachCartItem,
        addShippingInfo,
        saveUserCardInfoAndMakeCharge,
        saveComproTransaction,
        addWebHookNotification,
        getProductsForDesignName,
        getProductByProductAndDesignName,
        getAllProducts,
        getProductByIdForChristmas
    }
}