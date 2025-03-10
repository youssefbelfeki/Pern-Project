'use strict';

const {DataTypes} = require('sequelize') ;
const sequelize = require ('../../config/database.js');

const user = sequelize.define(
    'user',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        deletedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        paranoid: true,
        freezeTableName: true,
        modelName: 'user',
      }
);

module.exports = user;