"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;
    let Design = null;
    let Plan = null;

    var Product = sequelize.define("product", {  
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        productId: {
          type: Sequelize.STRING
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
        designId: {
          type: Sequelize.INTEGER
        },
        images: {
          type: Sequelize.TEXT
        },
        name: {
          type: Sequelize.STRING
        },
        price: {
          type: Sequelize.INTEGER
        },
        color: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: "product",
        timestamps: true
    });

    function initialize(){
        Design = app.models.design.Design;
        Plan=app.models.plan.Plan;
        Product.belongsTo(Design,{foreignKey:'designId', target: 'id'});
        Product.hasMany(Plan,{foreignKey:'productId', target: 'id'});
    }

    function getProductsForDesignId(id){
        return Product.findAll({
            where:{
                designId:id
            },
            include:[
                {
                    model:Design
                },
                {
                    model:Plan
                }
            ]
        });
    }

    function getProductById(id){
        return Product.findById(id,{
            include:[
                {
                    model:Design
                },
                {
                    model:Plan
                }
            ]
        })
    }

    function getFirstProductByDesignId(designId){
        return Product.findOne({
            where:{
                designId:designId
            },
            include:[
                {
                    model:Design
                },
                {
                    model:Plan
                }
            ]
        })
    }


    return {
        Product,
        initialize,
        getProductsForDesignId,
        getFirstProductByDesignId,
        getProductById
    };
};
