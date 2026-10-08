'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('INSTRUMENTO', { 
      id_INSTRUMENTO: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true}, 
      nombre_INSTRUMENTO: {type: Sequelize.STRING(20), allowNull: false}, 
      tipo_INSTRUMENTO: {type: Sequelize.STRING(15), allowNull: false}
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('INSTRUMENTO');
  }
};
