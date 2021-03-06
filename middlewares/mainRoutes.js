"use strict";

module.exports = app => {

    let shopService = app.services.shopService;

    function chooseLanguage(req,res,next){
        if(!req.session.currency){
            req.session.currency=process.env.PREFERRED_CURRENCY;
        }

        if(!req.session.language){
            req.session.language=process.env.PREFERRED_LANGUAGE;
        }
        if(req.session.language == "english"){
            var json = require('../public/languages/english.json');
            req.userlanguage=json;
            next();
        }
        else if(req.session.language == "spanish"){
            var json = require('../public/languages/spanish.json');
            req.userlanguage=json;
            next();
        }
    }

    app.get("/", chooseLanguage, (req, res, next) => {
        res.render("main", {language:req.userlanguage});
    });

    app.get("/explore",chooseLanguage, (req, res, next) => {
        res.render("explore",{language:req.userlanguage});
    });

    app.use("/shop",chooseLanguage, app.routes.shop);

    app.get("/xmas",chooseLanguage,(req,res,next)=>{
        shopService.getAllProducts(req.session.currency).then(data=>{
            //res.send(data);
            res.render("christmas",{products:data, language:req.userlanguage});
        })
    })

    app.get("/admin/*",chooseLanguage, (req,res,next)=>{
        res.render("admin", {language:req.userlanguage});
    });

    app.get("/admin",chooseLanguage, (req,res,next)=>{
        res.redirect("/admin/products");
        //res.render("admin", {language:req.userlanguage});
    });

    app.post("/language",(req,res,next)=>{
        req.session.language=req.body.language;
        req.session.currency=req.body.currency;
        res.send(true);
    })

    app.use("/contact",chooseLanguage, app.routes.contact);

    app.use("/api",chooseLanguage, app.routes.api);

    app.get("/*", (req,res,next)=>{
        res.redirect("/");
    });

    



    /*app.get("/shop/plans", (req, res, next) => {
        res.render("plans");
    });*/

};