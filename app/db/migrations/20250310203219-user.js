'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.createTable('user',
       {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
          },
          username: {
              type: Sequelize.STRING,
              allowNull: true,
          },
          password: {
              type: Sequelize.STRING,
              allowNull: true,
          },
          createdAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.NOW, // Automatically set current timestamp
          },
          updatedAt: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.NOW, // Automatically set current timestamp
          },
          deletedAt: {
              type: Sequelize.DATE,
              allowNull: true,
          },
       });
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('user');
     
  }
};
