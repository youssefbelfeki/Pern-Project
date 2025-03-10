const env = require('dotenv');
env.config({path: '.env'})

const developement = {
    database:  process.env.BD_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    dialect: 'postgres',
    logging: false
}

module.exports = developement