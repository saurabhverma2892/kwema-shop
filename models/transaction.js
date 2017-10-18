"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;

    var Transaction = sequelize.define("transaction", {  
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER
        },
        cartId: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.STRING
        },
        details: {
            type: Sequelize.TEXT
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        sessionId: {
            type: Sequelize.STRING
        },
        stripeId: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: "transaction",
        timestamps: true
    });

    function initialize(){

    }


    return {
        Transaction,
        initialize
    };
};
