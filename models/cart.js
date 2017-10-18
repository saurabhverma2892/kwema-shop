"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;

    var Cart = sequelize.define("cart", {  
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        transactionId: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: "cart",
        timestamps: true
    });

    function initialize(){

    }

    function addNewCart(user){
        return Cart.create({
            userId:user.id
        });
    }


    return {
        Cart,
        initialize,
        addNewCart
    };
};
