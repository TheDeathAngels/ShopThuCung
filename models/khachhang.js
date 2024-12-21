"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KhachHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KhachHang.hasMany(models.DonHang, {
        foreignKey: "CustomerID",
      });
    }
  }
  KhachHang.init({
    CustomerID: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Đặt ProductID làm khóa chính
      autoIncrement: true, // Nếu bảng hỗ trợ auto-increment
    },
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    CustomerName: DataTypes.STRING,
    Avatar: DataTypes.STRING,
    CustomerAddress: DataTypes.STRING,
    PhoneNumber: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'KhachHang',
    tableName: 'khachhang',
  });
  return KhachHang;
};
