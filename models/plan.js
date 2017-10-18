"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;
    let Product = null;
    let Design=null;

    var Plan = sequelize.define("plan", {  
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
        devicePrice: {
          type: Sequelize.INTEGER
        },
        monthlyPrice: {
          type: Sequelize.INTEGER
        },
        yearlyPrice: {
          type: Sequelize.INTEGER
        },
        productId: {
          type: Sequelize.INTEGER
        },
        designId: {
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        }
    },
    {
        tableName: "plan",
        timestamps: true
    });

    function initialize(){
        Product=app.models.product.Product;
        Design=app.models.design.Design;
        Plan.belongsTo(Product,{foreignKey:"productId"});
        Plan.belongsTo(Design,{foreignKey:"designId"});
    }

    function getCartDetailsByPlanId(id){
        return Plan.findById(id,{
            include:[
                {
                    model:Product
                },
                {
                    model:Design
                }
            ]
        })
    }

    return {
        Plan,
        initialize,
        getCartDetailsByPlanId
    };
};
