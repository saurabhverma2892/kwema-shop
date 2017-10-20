"use strict";
let express = require("express");
let consign = require("consign");
let logger = require("winston");
let app = express();
let appPort = process.env.PORT || "9000";
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

if (process.env.NODE_ENV !== "test") {
    app.listen(appPort, () => {
        logger.info(`Server started on port ${appPort}`);
    });
}


module.exports = app;