'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('book', [
      {
        title: 'Shadow of the Moon',
        author: 'Liam Harper',
        genre: 'Fantasy',
        createdAt: new Date('2024-01-12'),
        updatedAt: new Date('2024-02-05')
      },
      {
        title: 'Echoes of the Past',
        author: 'Sophia Bennett',
        genre: 'Historical Fiction',
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-02-10')
      },
      {
        title: 'The Quantum Paradox',
        author: 'James Sinclair',
        genre: 'Science Fiction',
        createdAt: new Date('2024-02-01'),
        updatedAt: new Date('2024-02-18')
      },
      {
        title: 'Beneath the Surface',
        author: 'Emma Collins',
        genre: 'Mystery',
        createdAt: new Date('2024-01-28'),
        updatedAt: new Date('2024-02-14')
      },
      {
        title: 'The Art of Deception',
        author: 'Oliver Carter',
        genre: 'Thriller',
        createdAt: new Date('2024-02-03'),
        updatedAt: new Date('2024-02-16')
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('book', null, {});
     
  }
};
