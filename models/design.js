"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;
    let Product = null;

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
        Design.hasMany(Product,{foreignKey:'designId'});
    }

    function getAllDesigns(){
        return Design.findAll({
            include:[
                {
                    model:Product
                }
            ]
        });
    }


    return {
        Design,
        initialize,
        getAllDesigns
    };
};
