"use strict";

let path = require("path");
let dotenv = require("dotenv");
dotenv.load({ path: ".env" });

module.exports = {
    "development": {
        "username": process.env.KW_DB_USERNAME,
        "password": process.env.KW_DB_PASSWORD,
        "database": process.env.KW_DB_NAME,
        "host": process.env.KW_DB_HOST,
        "dialect": "postgres",
        "port":"5432",
        "ssl": false,
        "protocol": "postgres",
        "logging":  true,
        "dialectOptions": {
               "ssl": false
        }
    },
    "test": {
        "username": process.env.KW_DB_USERNAME,
        "password": process.env.KW_DB_PASSWORD,
        "database": process.env.KW_DB_NAME,
        "host": process.env.KW_DB_HOST,
        "dialect": "postgres",
        "port":"5432",
        "ssl": false,
        "protocol": "postgres",
        "logging":  true,
        "dialectOptions": {
               "ssl": false
        }
    },
    "production": {
        "username": process.env.KW_DB_USERNAME,
        "password": process.env.KW_DB_PASSWORD,
        "database": process.env.KW_DB_NAME,
        "host": process.env.KW_DB_HOST,
        "dialect": "postgres",
        "port":"5432",
        "ssl": false,
        "protocol": "postgres",
        "logging":  true,
        "dialectOptions": {
               "ssl": false
        }
    }
}