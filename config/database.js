require('dotenv').config();

module.exports = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
};
