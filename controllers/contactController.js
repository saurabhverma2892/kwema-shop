"use strict";

module.exports = app => {

    let contactService = app.services.contactService;

    function sendQuery(req,res,next){
        contactService.sendQuery(req.body).then(data=>{
            res.send(true);
        }).catch(err=>{
            next(err);
        })
    }


    return {
        sendQuery
    }
}