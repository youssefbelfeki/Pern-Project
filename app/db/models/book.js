'use strict';

const {DataTypes} = require('sequelize') ;
const sequelize = require ('../../config/database.js');

const book = sequelize.define(
    'book',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        genre: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        modelName: 'book',
        freezeTableName: true,
        paranoid: true
    }
);

module.exports = book;