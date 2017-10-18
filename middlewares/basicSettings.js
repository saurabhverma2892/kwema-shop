"use strict";

let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
let favicon = require("serve-favicon");
let path = require("path");
let morgan = require("morgan");
let dotenv = require("dotenv");
let passport = require("passport");
let session = require("express-session");
let flash    = require('connect-flash');


module.exports = app => {

    dotenv.load({ path: ".env" });
    app.set("views", path.join(__dirname, "../views"));
    app.set("view engine", "ejs");
    app.set("json spaces", 4);
    app.set("x-powered-by", false);
    app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));
    if (process.env.NODE_ENV !== "test") {
        app.use(morgan("dev"));
    }
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());

    app.use(session({
        secret:'kwemashop',
        saveUninitialized: true,
        resave: false
    }))

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
};