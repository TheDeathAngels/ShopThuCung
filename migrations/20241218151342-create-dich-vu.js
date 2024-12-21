"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DichVu", {
      ServiceID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      StoreID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "CuaHang",
          key: "StoreID",
        },
      },
      CategoryID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: "DanhMuc",
          key: "CategoryID",
        },
      },
      ServiceName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ServicePrice: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Rate: {
        type: Sequelize.INTEGER,
      },
      Description: {
        type: Sequelize.STRING,
      },
      Image: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("DichVu");
  },
};
