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
        "dialect": "mysql",
    },
    "test": {
        "username": process.env.KW_DB_USERNAME,
        "password": process.env.KW_DB_PASSWORD,
        "database": process.env.KW_DB_NAME,
        "host": process.env.KW_DB_HOST,
        "dialect": "mysql",
    },
    "production": {
        "username": process.env.KW_DB_USERNAME,
        "password": process.env.KW_DB_PASSWORD,
        "database": process.env.KW_DB_NAME,
        "host": process.env.KW_DB_HOST,
        "dialect": "mysql",
    }
}