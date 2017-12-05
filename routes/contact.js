"use strict"

let router = require("express").Router();

module.exports = app => {

    let contactController = app.controllers.contactController;
    
    router.route("/partner").post((req,res,next)=>{
        contactController.sendQuery(req,res,next);
    })

    /**
         * @api {post} /contact/partner Contact form for partners
         * @apiName ContactPartner
         * @apiGroup Partner
         *
         * @apiParamExample {json} Request-Example:
         *     {
                    "name":"saurabh",
                    "email":"saurabh.verma2892@gmail.com",
                    "message":"this is the message"
                }
         *
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     true
    **/
    

    return router;
}

