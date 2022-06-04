'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
     title: 'Por que dormimos?',
     edition_year: 2000,
     author: 'Natalia',
     pages: 100,
     stock: 3,
     createdAt: new Date(),
     UpdatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

