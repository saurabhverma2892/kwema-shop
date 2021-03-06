"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;

    var CartItem = sequelize.define("cartitem", {  
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER
        },
        productId: {
            type: Sequelize.INTEGER
        },
        designId: {
            type: Sequelize.INTEGER
        },
        planId: {
            type: Sequelize.INTEGER
        },
        planType: {
            type: Sequelize.STRING
        },
        cartId: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    },
    {
        tableName: "cartitem",
        timestamps: true
    });

    function initialize(){

    }

    function addCartItem(user,cartId,cartItemDetails){
        console.log(cartItemDetails);
        return CartItem.create({
            userId:user.id,
            cartId:cartId,
            productId:cartItemDetails.productId,
            quantity:cartItemDetails.quantity
        })
    }


    return {
        CartItem,
        initialize,
        addCartItem
    };
};
