"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;
    let Design = null;
    let Plan = null;
    let Currency = null;
    let Discount = null;

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
        },
        primaryImage:{
            type: Sequelize.STRING
        },
        material:{
            type: Sequelize.STRING
        },
        stone:{
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
        Currency=app.models.currency.Currency;
        Discount=app.models.discount.Discount;
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

    function getProductByNameAndDesign(productName,designId, currency){
        console.log("im here");
        return Product.findOne({
            include:[
                {
                    model:Design
                },
                {
                    model:Plan,
                    include:[
                        {
                            model:Currency,
                            where:{
                                currency:currency
                            }
                        }
                    ]
                }
            ],
            where:{
                name:productName,
                designId:designId
            },
        })
    }

    function getAllProducts(currency){
        return Product.findAll({
            include:[
                {
                    model:Design,
                    include:[
                        {
                            model:Currency,
                            where:{
                                currency:currency
                            }
                        },
                        {
                            model:Discount,
                            include:[
                            {
                                model:Currency,
                                where:{
                                    currency:currency
                                }
                            }]
                        }
                    ]
                },
                {
                    model:Plan,
                    include:[
                        {
                            model:Currency,
                            where:{
                                currency:currency
                            }
                        }
                    ]
                }
            ]
        })
    }

    function getProductByIdForChristmas(currency,id){
        return Product.findAll({
            where:{
                id:id
            },
            include:[
                {
                    model:Design,
                    include:[
                        {
                            model:Currency,
                            where:{
                                currency:currency
                            }
                        },
                        {
                            model:Discount,
                            include:[
                            {
                                model:Currency,
                                where:{
                                    currency:currency
                                }
                            }]
                        }
                    ]
                },
                {
                    model:Plan,
                    include:[
                        {
                            model:Currency,
                            where:{
                                currency:currency
                            }
                        }
                    ]
                }
            ]
        })
    }



    return {
        Product,
        initialize,
        getProductsForDesignId,
        getFirstProductByDesignId,
        getProductById,
        getProductByNameAndDesign,
        getAllProducts,
        getProductByIdForChristmas
    };
};
