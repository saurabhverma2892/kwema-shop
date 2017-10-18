"use strict";
let Sequelize = require("sequelize");
let bcrypt = require('bcrypt-nodejs');
let SALT_WORK_FACTOR = 12;
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;

    var User = sequelize.define("user", {  
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.TEXT
        },
        city: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        },
        state: {
            type: Sequelize.STRING
        },
        zipCode: {
            type: Sequelize.INTEGER
        },
        password: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        role: {
            type: Sequelize.STRING
        },
        sessionId: {
            type: Sequelize.STRING
        },
        creditCardNumber: {
            type: Sequelize.INTEGER
        },
        creditCardName: {
            type: Sequelize.STRING
        },
        cvv: {
            type: Sequelize.INTEGER
        },
        expirtyMonth: {
            type: Sequelize.INTEGER
        },
        expirtyYear: {
            type: Sequelize.INTEGER
        },
        registered: {
            type: Sequelize.BOOLEAN
        },
        verified: {
            type: Sequelize.BOOLEAN
        },
        planId: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: "user",
        timestamps: true,
        instanceMethods: {
            generateHash: function(password){
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            },

            validPassword: function(password){
                console.log(bcrypt);
                return bcrypt.compareSync(password, this.password);
            },
            toJSON: function () {
                console.log("tojson");
              var values = Object.assign({}, this.get());
              delete values.password;
              return values;
            }
        }

    });

    User.beforeCreate(function(user, options) {
        var hashedPw = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null);
        user.password = hashedPw;
    });  

    function initialize(){

    }

    return {
        User,
        initialize
    };
};
