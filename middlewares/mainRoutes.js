"use strict";

module.exports = app => {

    app.get("/", (req, res, next) => {
        res.render("main");
    });

};