"use strict";

module.exports = {
    secret: {
        key: "kwemashop"
    },
    postgresql: {
        username: process.env.KW_DB_USERNAME,
        password: process.env.KW_DB_PASSWORD,
        database: process.env.KW_DB_NAME,
        host:process.env.KW_DB_HOST,
        dialect: "postgres",
        port:"5432",
        timezone: '-05:00',
        dialect:'postgres',
        protocol: 'postgres',
        logging:  true,
        options:{
            host:process.env.PSQL_DB_HOST,
            dialect:'postgres'
        },
        dialectOptions: {
            ssl: false
        },
        pool: {
            max: 10,
            min: 0,
            idle: 10000,
            acquire: 10000
        }
    }
};