"use strict";
let Sequelize = require("sequelize");
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;

    var Contact = sequelize.define("contact", {  
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    },
    {
        tableName: "contact",
        timestamps: true
    });


    function sendQuery(params){
        return Contact.create({
            name:params.name,
            email:params.email,
            message:params.message,
            status:"unresolved"
        })
    }


    return {
        Contact,
        sendQuery
    };
};
