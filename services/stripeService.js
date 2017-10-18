"use strict";

let stripe = require("stripe")(process.env.KW_STRIPE_KEY || "sk_test_5NwDRLVogjG5a73rvakeoJb1");

module.exports = app => {

    function getUserDetails(token,user){
        return new Promise((resolve,reject)=>{
            stripe.customers.create({
              email: user.email,
              source: token,
            }).then((customer)=>{
              // YOUR CODE: Save the customer ID and other info in a database for later.
              console.log(customer);
              return resolve(customer);
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    function chargeUser(amount,id,currency){

        return new Promise((resolve,reject)=>{
            stripe.charges.create({
              amount: amount,
              currency: "usd",
              customer: id,
            }).then((transactionInfo)=>{
                return resolve(transactionInfo);
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    return{
        getUserDetails,
        chargeUser
    }
}