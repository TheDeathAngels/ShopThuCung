"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CuaHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CuaHang.hasMany(models.SanPham, {
        foreignKey: "StoreID",
      });
      CuaHang.hasMany(models.ChiTietDonHang, {
        foreignKey: "StoreID",
      });
      CuaHang.hasMany(models.DichVu, {
        foreignKey: "StoreID",
      });
    }
  }
  CuaHang.init(
    {
      StoreID: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Khóa chính của bảng
        autoIncrement: true,
      },
      StoreName: DataTypes.STRING,
      Image: DataTypes.TEXT,
      PhoneNumber: DataTypes.INTEGER,
      StoreAddress: DataTypes.STRING,
      Email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CuaHang",
      tableName: "cuahang",
    }
  );
  return CuaHang;
};
