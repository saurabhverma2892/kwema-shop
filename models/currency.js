"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;
    let Design = null;
    let Plan = null;

    var Currency = sequelize.define("currency", {  
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        currency: {
            type: Sequelize.STRING
        },
        value: {
            type: Sequelize.INTEGER
        },
        planId: {
            type: Sequelize.INTEGER
        },
        productId: {
            type: Sequelize.INTEGER
        },
        designId: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: "currency",
        timestamps: true
    });

    function initialize(){
        Design=app.models.design.Design;
        Plan=app.models.plan.Plan;
        /*Currency.hasOne(Design,{foreignKey:"designId"});*/
        /*Currency.hasOne(Plan,{foreignKey:"planId"});*/
    }

    return {
        Currency,
        initialize
    };
};
