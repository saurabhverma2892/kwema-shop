"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;
    let Product = null;
    let Currency = null;
    let Discount = null;

    var Design = sequelize.define("design", {  
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
        details: {
            type: Sequelize.TEXT
        },
        features: {
            type: Sequelize.TEXT
        },
        designer: {
          type: Sequelize.STRING
        },
        manufacturer: {
          type: Sequelize.STRING
        }, 
        images: {
          type: Sequelize.TEXT
        },
        name: {
          type: Sequelize.STRING
        },
        price: {
          type: Sequelize.INTEGER
        }
    },
    {
        tableName: "design",
        timestamps: true
    });

    function initialize(){
        Product=app.models.product.Product;
        Currency=app.models.currency.Currency;
        Discount=app.models.discount.Discount;
        Design.hasMany(Product,{foreignKey:'designId'});
        Design.hasMany(Currency,{foreignKey:'designId'});
        Design.hasMany(Discount,{foreignKey:'designId'});
    }

    function getAllDesigns(currency){
        return Design.findAll({
            include:[
                {
                    model:Product
                },
                {
                    model:Currency,
                    where:{
                        currency:currency
                    }
                }
            ]
        });
    }

    function getDesignByName(name, currency){
        return Design.findOne({
            where:{
                name:name
            },
            include:[
                {
                    model:Product,
                },
                {
                    model:Currency,
                    where:{
                        currency:currency
                    }
                }
            ]
        })
    }


    return {
        Design,
        initialize,
        getAllDesigns,
        getDesignByName
    };
};
