'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ChiTietDonHang', {
      ProductDetailID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OrderID: {
        type: Sequelize.INTEGER,
        references:{
          model: 'DonHang',
          key: 'OrderID',
        },
      },
      ProductID: {
        type: Sequelize.INTEGER,
        references:{
          model: 'SanPham',
          key: 'ProductID',
        },
      },
      StoreID: {
        type: Sequelize.INTEGER,
        references:{
          model: 'CuaHang',
          key: 'StoreID',
        },
      },
      Price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ChiTietDonHang');
  }
};