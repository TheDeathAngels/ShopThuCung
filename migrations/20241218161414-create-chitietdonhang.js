"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ChiTietDonHang", {
      ProductDetailID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      OrderID: {
        type: Sequelize.INTEGER,
        references: {
          model: "DonHang",
          key: "OrderID",
        },
      },
      ProductID: {
        type: Sequelize.INTEGER,
        references: {
          model: "SanPham",
          key: "ProductID",
        },
      },
      StoreID: {
        type: Sequelize.INTEGER,
        references: {
          model: "CuaHang",
          key: "StoreID",
        },
      },
      ServiceID: {
        type: Sequelize.INTEGER,
        references: {
          model: "DichVu",
          key: "ServiceID",
        },
      },
      Quantity: {
        type: Sequelize.INTEGER,
      },
      Price: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ChiTietDonHang");
  },
};
