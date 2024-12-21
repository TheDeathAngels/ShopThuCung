"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SanPham", {
      ProductID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      StoreID: {
        type: Sequelize.INTEGER,
        references: {
          model: "CuaHang",
          key: "StoreID",
        },
      },
      CategoryID: {
        type: Sequelize.INTEGER,
        references: {
          model: "DanhMuc",
          key: "CategoryID",
        },
      },
      ProductName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Image: {
        type: Sequelize.TEXT,
      },
      Quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Rate: {
        type: Sequelize.INTEGER,
      },
      Description: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("SanPham");
  },
};
