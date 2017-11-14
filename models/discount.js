"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;
    let Currency = null;

    var Discount = sequelize.define("discount", {  
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
        name: {
            type: Sequelize.STRING
        },
        details: {
            type: Sequelize.STRING
        },
        percentage: {
            type: Sequelize.INTEGER
        },
        planId: {
            type: Sequelize.INTEGER
        },
        productId: {
            type: Sequelize.INTEGER
        },
        designId:{
          type: Sequelize.INTEGER
        }
    },
    {
        tableName: "discount",
        timestamps: true
    });

    function initialize(){
        Currency=app.models.currency.Currency;
        Discount.hasMany(Currency,{foreignKey:'discountId'});
    }

    return {
        Discount,
        initialize
    };
};
