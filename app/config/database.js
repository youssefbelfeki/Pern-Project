const { Sequelize } = require('sequelize');
const developement = require('./config');
const sequelize = new Sequelize(developement);
console.log(developement)

module.exports = sequelize