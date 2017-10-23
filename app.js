"use strict";
let express = require("express");
let consign = require("consign");
let logger = require("winston");
let http = require('http');
let https = require('https');
let app = express();
let fs = require("fs");

let sslKey = fs.readFileSync("certificates/securitykey.key");
let sslCertificate = fs.readFileSync("certificates/certificate.pem");

console.log(sslKey);

let options = {
    key: sslKey,
    cert: sslCertificate
};

let httpPort = process.env.PORT || "80";
let httpsPort = process.env.PORT || "443";

app.all("*", function(req, res, next){
  if (req.secure) {
    return next();
  };
 res.redirect("https://"+req.hostname+":"+app.get("port_https")+req.url);
});

consign()
    .include("./helpers")
    .then("./middlewares/basicSettings.js")
    .then("./config")
    .then("./db/connection.js")
    .then("./middlewares/staticResources.js")
    .then("./models")
    .then("./auth/passport.js")
    .then("./services/stripeService.js")
    .then("./services")
    .then("./controllers")
    .then("./routes")
    .then("./middlewares/mainRoutes.js")
    .then("./middlewares/errorHandler.js")
    .into(app);


app.models.cart.initialize();
app.models.design.initialize();
app.models.product.initialize();
app.models.transaction.initialize();
app.models.user.initialize();
app.models.plan.initialize();

var secureServer = https.createServer(options, app)
  .listen(httpsPort, function () {
    console.log('Secure Server listening on port ' + httpsPort);
});

var insecureServer = http.createServer(app).listen(httpPort, function() {
  console.log('Insecure Server listening on port ' + httpPort);
})


module.exports = app;