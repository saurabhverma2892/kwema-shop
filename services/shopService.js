"use strict";

module.exports = app => {
    let Design = app.models.design;
    let Product = app.models.product;
    let Plan = app.models.plan;

    function getAllDesigns(){
        return new Promise((resolve,reject)=>{
            Design.getAllDesigns().then(data=>{
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
                console.log(data);
                return resolve(data)
            }).catch(err=>{
                console.log("error coming");
                return reject(err);
            })
        })
    }

    function getPlanDetailsForEachCartItem(req){
        var promises = [];
        return new Promise((resolve,reject)=>{
            var i = 0;
            req.session.cart.forEach(cartItem=>{
                var promisePlan = new Promise((resolve2,reject2)=>{
                    Plan.getPlanById(cartItem.planId).then(data=>{
                        cartItem.planDetails=data;
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

    return {
        getAllDesigns,
        getProductsForDesignId,
        getCartDetailsByPlanId,
        getPlanDetailsForEachCartItem
    }
}