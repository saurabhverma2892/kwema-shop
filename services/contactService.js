"use strict";

module.exports = app => {

    let Contact = app.models.contact;
    function sendQuery(params){
        return new Promise((resolve,reject)=>{
            Contact.sendQuery(params).then(data=>{
                return resolve(data);
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    return {
        sendQuery
    }
}