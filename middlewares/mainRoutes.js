"use strict";

module.exports = app => {

    app.get("/", (req, res, next) => {
        res.render("main");
    });

    app.get("/explore", (req, res, next) => {
        res.render("explore");
    });

    app.use("/shop", app.routes.shop);

    app.get("/*", (req,res,next)=>{
        res.redirect("/");
    });


    /*app.get("/shop/plans", (req, res, next) => {
        res.render("plans");
    });*/

};