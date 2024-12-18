'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CuaHang', {
      StoreID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StoreName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      Image: {
        type: Sequelize.TEXT
      },
      PhoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      StoreAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CuaHang');
  }
};