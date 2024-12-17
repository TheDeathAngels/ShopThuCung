'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KhachHang', {
      Customerid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CustomerName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Avatar: {
        type: Sequelize.STRING
      },
      PhoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      RegisterDate: {
        type: Sequelize.DATE
      },
      UpdateDate: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('KhachHang');
  }
};