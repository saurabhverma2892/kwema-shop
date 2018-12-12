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
    /**
         * @api {get} /shop/ Home Page
         * @apiName GetHomePage
         * @apiGroup Pages
    **/

    router.route("/login").get((req,res,next)=>{
        res.render("login", {language:req.userlanguage, message:req.flash("signupMessage")});
    })
    /**
         * @api {get} /shop/login Login Page
         * @apiName GetLoginPage
         * @apiGroup Pages
         *
         *
    **/


    router.route("/cart").get((req,res,next)=>{
        //todo by cart Id
        console.log("in cart");
        shopController.getCartDetails(req,res,next)
        //res.render("cart");
    })
    /**
         * @api {get} /shop/cart Cart Page
         * @apiName GetCartPage
         * @apiGroup Pages
         *
         *
    **/

    router.route("/products/:designName").get((req,res,next)=>{
        shopController.getProductsPage(req,res,next);
    })
    /**
         * @api {get} /shop/products/:designName Products for design
         * @apiName ProductsOfDesign
         * @apiDescription Products for a particular design by design name
         * @apiGroup Pages
         *
         *
    **/

    router.route("/products/:designName/:productName").get((req,res,next)=>{
        shopController.getItemPage(req,res,next);
    })
    /**
         * @api {get} /shop/products/:designName/:productName Products details
         * @apiName ProductDetails
         * @apiGroup Pages
         *
         *
    **/

    router.route("/products/:designName/:productName/plans").get((req,res,next)=>{
        console.log(req.params);
        shopController.getPlansForProduct(req,res,next);
    })
    /**
         * @api {get} /shop/products/:designName/:productName/plans Plans for a product
         * @apiName plansForProduct
         * @apiGroup Pages
         *
         *
    **/

    router.route("/pay/card").get(isLoggedIn, (req,res,next)=>{
        shopController.getPaymentPage(req,res,next)
    })
    /**
         * @api {get} /shop/pay/card Checkout By Card
         * @apiName CheckoutByCard
         * @apiGroup Pages
         *
         *
    **/

    router.route("/pay/cash").get(isLoggedIn, (req,res,next)=>{
        shopController.getPaymentByCashPage(req,res,next)
    })
    /**
         * @api {get} /shop/pay/card Checkout By Card
         * @apiName CheckoutByCash
         * @apiGroup Pages
         *
         *
    **/

    router.route("/kwema-app").get((req,res,next)=>{
        res.render("getapp",{language:req.userlanguage});
    })
    /**
         * @api {get} /shop/kwema-app Kwema App
         * @apiName CheckoutByCash
         * @apiGroup Pages
         *
         *
    **/

    router.route("/checkout").get((req,res,next)=>{
        console.log("redirecting to shop cart");
        res.redirect("/shop/cart");
    })

    router.route("/paynow").post((req,res,next)=>{
        res.redirect("/shop/kwema-app");
    })

    router.route("/pay/cash/failure").get((req,res,next)=>{
        next("something went wrong");
    })
    /**
         * @api {get} /shop/pay/cash/failure failure redirect
         * @apiDescription redirects to this api when Compropago payment fails on the compro pago page
         * @apiName ComproPagoFail
         * @apiGroup Compropago
         *
         *
    **/

    router.route("/pay/cash/success").get((req,res,next)=>{
        shopController.successComroPayment(req,res,next);
    })
    /**
         * @api {get} /shop/pay/cash/success Success Redirect
         * @apiName ComproPagoSuccess
         * @apiDescription redirects to this api when Compropago payment is Successful on the compropago page which in turn redirects to kwema-app page after saving the transaction details
         * @apiGroup Compropago
         *
         *
         *
    **/

    router.route("/shipping").post(isLoggedIn,(req,res,next)=>{
        shopController.addShippingInfoToUser(req,res,next);
    })
    /**
         * @api {post} /shop/shipping Save Shipping Information
         * @apiName SaveShippingInfo
         * @apiGroup User Details
         *
         * @apiParamExample {json} Request-Example:
         *     {
                    "addressedToName":"saurabh",
                    "areaCode":"06700",
                    "phone":"+525531062851",
                    "address":"Calle Orizaba",
                    "city":"Mexico",
                    "state":"Estado De MExico",
                    "country":"Mexico",
                    "zipCode":"06700",
                    "otherEmail":"saurabh.verma2892@gmail.com",
                    "id":1
                }
         *
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     Redirects to login page if user already exists, or saves this info and registers user os user not present in database
    **/

    router.route("/pay/card/charge").post(isLoggedIn,(req,res,next)=>{
        shopController.saveUserCardInfoAndMakeCharge(req,res,next);
        /**
             * @api {post} /shop/pay/card/charge Pay By Stripe
             * @apiName MakeStripePay
             * @apiGroup Stripe
             * @apiDescription Pay By Stripe and save user stripe info

             *
             * @apiParamExample {json} Request-Example:
             *      {
                        "stripeToken":"added automatically from stripe js plugin on the frontend"
                    }
             *
             *
             * @apiSuccessExample Success-Response:
             *     HTTP/1.1 200 OK
             *     Redirects to kwema-app page on success
        **/
    })

    router.route("/checkout").post((req,res,next)=>{
        if(!req.session.cart){
            req.session.cart=[];
        }
        var carToAdd=[];

        var planIds = [];
        var planTypes = [];

        var productIds = [];
        var productNames = [];
        var quantities = [];
        if(Object.prototype.toString.call( req.body.productId )  == '[object Array]'){
            productIds = req.body.productId;
            productNames = req.body.productName;
            quantities = req.body.quantity;
        }
        else{
            productIds.push(req.body.productId);
            productNames.push(req.body.productName);
            quantities.push(req.body.quantity);
        }

        var i = 0;
        var error = false;
        productIds.forEach(productId=>{
            carToAdd.push({productId:productId,productName:productNames[i],quantity:quantities[i]});
            i++;
        })

        if(!error){
            req.session.cart=carToAdd;
            console.log("req.session.cart");
            console.log(req.session.cart);
            res.redirect("/shop/cart");
        }
        else{
            console.log("ajlskdfhasdf");
            req.flash("message","Error in form data");
            res.redirect("/shop");
        }

        /**
             * @api {post} /shop/checkout Updates the session
             * @apiName FinalCheckout
             * @apiGroup Session Update
             * @apiDescription Updates the session.cart and redirects to cart with the right info mainly done to update the quantities form the cart view page
             *
             * @apiParamExample {json} Request-Example:
             *      {
                        "planId":[1,2,3],
                        "planType":["monthly","monthly","monthly"],
                        "quantity":[1,2,1]
                    }
             *
             *
             * @apiSuccessExample Success-Response:
             *     Redirects to Cart page
        **/
        
    })

    router.route("/cart-session/add").post((req,res,next)=>{
        var usercartdetails = req.body;
        if(!req.session.cart){
            req.session.cart=[];
        }
        req.session.cart.push({productId:req.body.productId,quantity:1})
        console.log(req.session.cart);
        shopController.getProductDetailsForEachCartItem(req,res,next);
        //shopController.getPlanDetailsForEachCartItem(req,res,next);

        
    })

    router.route("/usercart").post((req,res,next)=>{
        var usercartdetails = req.body;
        if(!req.session.cart){
            req.session.cart=[];
        }
        var i = 0;
        usercartdetails.planType.forEach(type=>{
            if(type == "monthly" || type =="yearly"){
                req.session.cart.forEach(exisitingCartData=>{
                    if(exisitingCartData.planId==usercartdetails.planId[i] && exisitingCartData.planType==type){
                        res.status(500);
                        res.send(false)
                        return;
                    }
                })
                req.session.cart.push({planType:type, planId:usercartdetails.planId[i],quantity:1})
            }
            else{
            }
            i++
        })
        //req.session.cart.push(usercartdetails);
        shopController.getPlanDetailsForEachCartItem(req,res,next);
        //res.send(req.session.cart);

        /**
             * @api {post} /shop/usercart Add Items to cart
             * @apiName addToCart
             * @apiGroup Session Update
             * @apiDescription Adds Items to cart in session.cart
             *
             * @apiParamExample {json} Request-Example:
             *      
                    {
                        "planId":[1,,],
                        "planType":["monthly",,],
                        "quantity":[1,,]
                    }
             *
             *
             * @apiSuccessExample Success-Response:
             *     Redirects to Pay By Card Page
        **/
    })

    router.route("/usercart").get((req,res,next)=>{
        if(!req.session.cart){
            req.session.cart=[];
        }
        shopController.getProductDetailsForEachCartItem(req,res,next);
        //res.send(req.session.cart);

        /**
             * @api {get} /shop/usercart Get All Cart Info
             * @apiName getCartInfo
             * @apiGroup Cart
             *
             *
             * @apiSuccessExample Success-Response:
             *     HTTP/1.1 200 OK
             *     [
                       {
                          "planType":"monthly",
                          "planId":"12",
                          "quantity":1,
                          "planDetails":{
                             "id":12,
                             "createdAt":null,
                             "updatedAt":null,
                             "details":"[]",
                             "devicePrice":169,
                             "monthlyPrice":9,
                             "yearlyPrice":90,
                             "productId":6,
                             "designId":2,
                             "name":"Evening",
                             "product":{
                                "id":6,
                                "productId":null,
                                "createdAt":null,
                                "updatedAt":"2017-11-27T20:05:37.000Z",
                                "details":"Gold plated and Onyx",
                                "features":null,
                                "designer":null,
                                "manufacturer":null,
                                "designId":2,
                                "images":"['/images/timelesseve1.jpg','/images/timelesseve2.jpg','/images/timelesseve3.jpg']",
                                "name":"Timeless",
                                "price":140,
                                "color":"#C9A656",
                                "primaryImage":"/images/timelesseve1.jpg",
                                "material":null,
                                "stone":"working well"
                             },
                             "design":{
                                "id":2,
                                "createdAt":null,
                                "updatedAt":"2017-11-27T21:13:37.000Z",
                                "details":"working perfectly",
                                "features":null,
                                "designer":null,
                                "manufacturer":null,
                                "images":"['/images/evecollection.png']",
                                "name":"Eve2",
                                "price":140,
                                "currencies":[
                                   {
                                      "id":4,
                                      "createdAt":null,
                                      "updatedAt":null,
                                      "currency":"MXN",
                                      "value":3190,
                                      "planId":null,
                                      "productId":null,
                                      "designId":2,
                                      "discountId":null
                                   }
                                ],
                                "discounts":[
                                   {
                                      "id":2,
                                      "createdAt":null,
                                      "updatedAt":null,
                                      "name":"Xmas",
                                      "details":"Christmas discount",
                                      "percentage":null,
                                      "planId":null,
                                      "productId":null,
                                      "designId":2,
                                      "currencies":[
                                         {
                                            "id":68,
                                            "createdAt":null,
                                            "updatedAt":null,
                                            "currency":"MXN",
                                            "value":2499,
                                            "planId":null,
                                            "productId":null,
                                            "designId":null,
                                            "discountId":2
                                         },
                                         {
                                            "id":72,
                                            "createdAt":null,
                                            "updatedAt":null,
                                            "currency":"MXN",
                                            "value":2499,
                                            "planId":null,
                                            "productId":null,
                                            "designId":null,
                                            "discountId":2
                                         }
                                      ]
                                   }
                                ]
                             },
                             "currencies":[
                                {
                                   "id":40,
                                   "createdAt":null,
                                   "updatedAt":null,
                                   "currency":"MXN",
                                   "value":99,
                                   "planId":12,
                                   "productId":null,
                                   "designId":null,
                                   "discountId":null
                                }
                             ]
                          }
                       }
                    ]
        **/
    })

    router.route("/usercart/delete").post((req,res,next)=>{
        req.session.cart.forEach(cartDetails=>{
            if(cartDetails.productId==req.body.productId){
                console.log("splicing");
                req.session.cart.splice(req.session.cart.indexOf(cartDetails),1);
                res.send(req.session.cart);
                return;
            }
        })

        /**
             * @api {post} /shop/usercart/delete Delete Items in cart
             * @apiDescription Delete Items in cart in session.cart
             * @apiName deleteFromCart
             * @apiGroup Session Update
             *
             * @apiParamExample {json} Request-Example:
             *      {
                        "planId":1,
                        "planType":"monthly"
                    }
             *
             *
             * @apiSuccessExample Success-Response:
             *     Redirects to Pay By Card Page
        **/
    })

    router.route("/usercart/updatequantities").post((req,res,next)=>{
        if(!req.session.cart){
            req.session.cart=[];
        }
        var carToAdd=[];

        var planIds = [];
        var planTypes = [];
        var quantities = [];

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
                error = true;
            }

            i++;
        })

        if(!error){
            req.session.cart=carToAdd;
            res.send(true);
        }
        else{
            req.flash("message","Error in form data");
            res.send(false);
        }

        /**
             * @api {post} /shop/usercart/updatequantities Update Quantities
             * @apiName updateQuantitiesInCart
             * @apiDescription Updates the session.cart and redirects to cart with the right info mainly done to update the quantities form the cart view page
             * @apiGroup Session Update
             *
             * @apiParamExample {json} Request-Example:
             *      {
                        "planId":[1,2,3],
                        "planType":["monthly","monthly","monthly"],
                        "quantity":[1,2,1]
                    }
             *
             *
             * @apiSuccessExample Success-Response:
             *  HTTP/1.1 200 OK
             *     [
                    {
                       "planType":"monthly",
                       "planId":"12",
                       "quantity":1,
                       "planDetails":{
                          "id":12,
                          "createdAt":null,
                          "updatedAt":null,
                          "details":"[]",
                          "devicePrice":169,
                          "monthlyPrice":9,
                          "yearlyPrice":90,
                          "productId":6,
                          "designId":2,
                          "name":"Evening",
                          "product":{
                             "id":6,
                             "productId":null,
                             "createdAt":null,
                             "updatedAt":"2017-11-27T20:05:37.000Z",
                             "details":"Gold plated and Onyx",
                             "features":null,
                             "designer":null,
                             "manufacturer":null,
                             "designId":2,
                             "images":"['/images/timelesseve1.jpg','/images/timelesseve2.jpg','/images/timelesseve3.jpg']",
                             "name":"Timeless",
                             "price":140,
                             "color":"#C9A656",
                             "primaryImage":"/images/timelesseve1.jpg",
                             "material":null,
                             "stone":"working well"
                          },
                          "design":{
                             "id":2,
                             "createdAt":null,
                             "updatedAt":"2017-11-27T21:13:37.000Z",
                             "details":"working perfectly",
                             "features":null,
                             "designer":null,
                             "manufacturer":null,
                             "images":"['/images/evecollection.png']",
                             "name":"Eve2",
                             "price":140,
                             "currencies":[
                                {
                                   "id":4,
                                   "createdAt":null,
                                   "updatedAt":null,
                                   "currency":"MXN",
                                   "value":3190,
                                   "planId":null,
                                   "productId":null,
                                   "designId":2,
                                   "discountId":null
                                }
                             ],
                             "discounts":[
                                {
                                   "id":2,
                                   "createdAt":null,
                                   "updatedAt":null,
                                   "name":"Xmas",
                                   "details":"Christmas discount",
                                   "percentage":null,
                                   "planId":null,
                                   "productId":null,
                                   "designId":2,
                                   "currencies":[
                                      {
                                         "id":68,
                                         "createdAt":null,
                                         "updatedAt":null,
                                         "currency":"MXN",
                                         "value":2499,
                                         "planId":null,
                                         "productId":null,
                                         "designId":null,
                                         "discountId":2
                                      },
                                      {
                                         "id":72,
                                         "createdAt":null,
                                         "updatedAt":null,
                                         "currency":"MXN",
                                         "value":2499,
                                         "planId":null,
                                         "productId":null,
                                         "designId":null,
                                         "discountId":2
                                      }
                                   ]
                                }
                             ]
                          },
                          "currencies":[
                             {
                                "id":40,
                                "createdAt":null,
                                "updatedAt":null,
                                "currency":"MXN",
                                "value":99,
                                "planId":12,
                                "productId":null,
                                "designId":null,
                                "discountId":null
                             }
                          ]
                       }
                    }
                 ]
             *     
        **/
    })

    function checkUserLoggedInAndRedirect(req,res,next){
        if(req.user){
            shopController.addShippingInfoToUser(req,res,next);
            //res.redirect("/shop/pay/card");
        }
        else
        {
            next();
        }
    }


    router.route("/login").post(passport.authenticate('local-login',{
        successRedirect : '/shop/cart', // redirect to the secure profile section
        failureRedirect : '/shop/login', // redirect back to the signup page if there is an error
        failureFlash : true
    }))

    /**
         * @api {post} /shop/login Login User
         * @apiName loginUser
         * @apiDescription Uses local-login passort strategy to sign in user
         * @apiGroup Login
         *
         * @apiParamExample {json} Request-Example:
         *     {
                    "email":"saurabh.verma2892@gmail.com",
                    "password":"password"
         *     }
         *
         *
         * @apiSuccessExample Success-Response:
         *     redirects to cart if success, and back to login if unsuccessful with error
    **/

    router.route("/register").post(passport.authenticate('local-signup',{
        successRedirect : '/shop/cart', // redirect to the secure profile section
        failureRedirect : '/shop/login', // redirect back to the signup page if there is an error
        failureFlash : true 
    }))

    /**
         * @api {post} /shop/register Register User
         * @apiName registerUser
         * @apiDescription Uses local-signup passort strategy to register user
         * @apiGroup Login
         *
         * @apiParamExample {json} Request-Example:
         *     {
                    "email":"saurabh.verma2892@gmail.com",
                    "password":"password",
                    "firstName":"saurabh",
                    "lastName":"verma"
         *     }
         *
         *
         * @apiSuccessExample Success-Response:
         *     redirects to cart if success, and back to login if unsuccessful with error
    **/

    router.route("/pay/cash/listener").post((req,res,next)=>{
        shopController.addWebHookNotification(req,res,next);
        /**
             * @api {post} /shop/pay/cash/listener Webhook
             * @apiName compropageWebhook
             * @apiDescription Webhook to get compropago message status
             * @apiGroup Compropago
             *
             * @apiParamExample {json} Request-Example:
             *     {
                        "amount":"100",
                        "outcome":{"seller_message":"paid"},
                        "id":"StripeId",
                        "transactionInfo":{
                            "balance_transaction":"0",
                            "created":"date",
                            "customer":"Stripe customer id",
                            "failure_code":"200",
                            "failure_message":null,
                            "invoice":null,
                            "paid":true,
                            "refunded":null,
                            "source":{
                                "brand":"Visa",
                                "source":"Bancomer",
                                "country":"Mexico",
                                "fingerprint":null,
                                "funding":null,
                                "last4":4242,
                                "exp_month":"07",
                                "id":"id",
                            },
                            "status":"paid",
                            "refunds":{
                                "total_count":null,
                                "has_more":null
                            }
                    }
             *
             *
             * @apiSuccessExample Success-Response:
             *     updates these details in transactions in the background
        **/
    })

    router.route("/checkout-login").post(checkUserLoggedInAndRedirect, passport.authenticate('local-checkout-login',{
        successRedirect : '/shop/pay/card', // redirect to the secure profile section
        failureRedirect : '/shop/login', // redirect back to the signup page if there is an error
        failureFlash : true 
    }))

    /**
         * @api {post} /shop/checkout-login Register/Redirect User
         * @apiName registerUserForNewCheckout
         * @apiDescription Uses local-checkout-login passort strategy to register user or redirect to login if user already present
         * @apiGroup Login
         *
         * @apiParamExample {json} Request-Example:
         *     {
                    "email":"saurabh.verma2892@gmail.com",
                    "password":"password",
                    "firstName":"saurabh",
                    "address":"calle oriziba mexico",
                    "city":"mexico city",
                    "phone":"5531062851",
                    "state":"estado de mexico",
                    "zipCode":"06700",
                    "country":"Mexico",
                    "areaCode":"06700"
         *     }
         *
         *
         * @apiSuccessExample Success-Response:
         *     redirects to cart if success, and back to login if unsuccessful with error
    **/

    router.route("/paybycash/save").get((req,res,next)=>{
        shopController.saveCashPaymentCart(req,res,next);

        /**
             * @api {get} /shop/paybycash/save Save Cash Payment
             * @apiName saveCashPayment
             * @apiDescription Saves cash payment in the transactions to be referred to later when we get notifications from the webhook
             * @apiGroup Compropago
             *
             * @apiParamExample {json} Request-Example:
             *     {
                        
             *     }
             *
             *
             * @apiSuccessExample Success-Response:
             *     true
        **/
    })


    router.route("/christmas").post((req,res,next)=>{
        var usercartdetails = req.body;
        if(!req.session.cart){
            req.session.cart=[];
        }
        var i = 0;
        
        req.session.cart.push({planType:"monthly", planId:req.body.planId,quantity:1});
        if(!req.session.discount){
            req.session.discount=[];
        }
        req.session.discount="xmas";
        //req.session.cart.push(usercartdetails);
        shopController.getPlanDetailsForEachCartItem(req,res,next);

        /**
             * @api {get} /shop/christmas Christmas cart details
             * @apiName christmasPage
             * @apiDescription sets discount to xmas and proceeds with the general flow to add items to the cart and after fetch all christmas plan details in the cart.
             * @apiGroup Session Update
             *
             * @apiParamExample {json} Request-Example:
             *      {
                       "planId":[1,,],
                       "planType":["monthly",,],
                       "quantity":[1,,]
                    }
             *
             *
             * @apiSuccessExample Success-Response:
             *     [
                    {
                       "planType":"monthly",
                       "planId":"12",
                       "quantity":1,
                       "planDetails":{
                          "id":12,
                          "createdAt":null,
                          "updatedAt":null,
                          "details":"[]",
                          "devicePrice":169,
                          "monthlyPrice":9,
                          "yearlyPrice":90,
                          "productId":6,
                          "designId":2,
                          "name":"Evening",
                          "product":{
                             "id":6,
                             "productId":null,
                             "createdAt":null,
                             "updatedAt":"2017-11-27T20:05:37.000Z",
                             "details":"Gold plated and Onyx",
                             "features":null,
                             "designer":null,
                             "manufacturer":null,
                             "designId":2,
                             "images":"['/images/timelesseve1.jpg','/images/timelesseve2.jpg','/images/timelesseve3.jpg']",
                             "name":"Timeless",
                             "price":140,
                             "color":"#C9A656",
                             "primaryImage":"/images/timelesseve1.jpg",
                             "material":null,
                             "stone":"working well"
                          },
                          "design":{
                             "id":2,
                             "createdAt":null,
                             "updatedAt":"2017-11-27T21:13:37.000Z",
                             "details":"working perfectly",
                             "features":null,
                             "designer":null,
                             "manufacturer":null,
                             "images":"['/images/evecollection.png']",
                             "name":"Eve2",
                             "price":140,
                             "currencies":[
                                {
                                   "id":4,
                                   "createdAt":null,
                                   "updatedAt":null,
                                   "currency":"MXN",
                                   "value":3190,
                                   "planId":null,
                                   "productId":null,
                                   "designId":2,
                                   "discountId":null
                                }
                             ],
                             "discounts":[
                                {
                                   "id":2,
                                   "createdAt":null,
                                   "updatedAt":null,
                                   "name":"Xmas",
                                   "details":"Christmas discount",
                                   "percentage":null,
                                   "planId":null,
                                   "productId":null,
                                   "designId":2,
                                   "currencies":[
                                      {
                                         "id":68,
                                         "createdAt":null,
                                         "updatedAt":null,
                                         "currency":"MXN",
                                         "value":2499,
                                         "planId":null,
                                         "productId":null,
                                         "designId":null,
                                         "discountId":2
                                      },
                                      {
                                         "id":72,
                                         "createdAt":null,
                                         "updatedAt":null,
                                         "currency":"MXN",
                                         "value":2499,
                                         "planId":null,
                                         "productId":null,
                                         "designId":null,
                                         "discountId":2
                                      }
                                   ]
                                }
                             ]
                          },
                          "currencies":[
                             {
                                "id":40,
                                "createdAt":null,
                                "updatedAt":null,
                                "currency":"MXN",
                                "value":99,
                                "planId":12,
                                "productId":null,
                                "designId":null,
                                "discountId":null
                             }
                          ]
                       }
                    }
                 ]
        **/
    })

    return router;
}

