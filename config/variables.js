"use strict";

module.exports = {
    secret: {
        key: "kwemashop"
    },
    mysql: {
        username: process.env.KW_DB_USERNAME,
        password: process.env.KW_DB_PASSWORD,
        database: process.env.KW_DB_NAME,
        options:{
            host: process.env.CAL_DB_HOST,
            timezone: '+05:30',
            dialect: "mysql"
        } 
    }
};