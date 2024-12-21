"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SanPham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SanPham.belongsTo(models.CuaHang, {
        foreignKey: "StoreID",
      });
      SanPham.belongsTo(models.DanhMuc, {
        foreignKey: "CategoryID",
      });
      SanPham.hasMany(models.ChiTietDonHang, {
        foreignKey: "ProductID",
      });
    }
  }
  SanPham.init(
    {
      ProductID: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Đặt ProductID làm khóa chính
        autoIncrement: true, // Nếu bảng hỗ trợ auto-increment
      },
      ProductName: DataTypes.STRING,
      StoreID: DataTypes.INTEGER,
      CategoryID: DataTypes.INTEGER,
      Image: DataTypes.TEXT,
      Quantity: DataTypes.INTEGER,
      Price: DataTypes.INTEGER,
      Rate: DataTypes.INTEGER,
      Description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SanPham",
      tableName: "sanpham",
    }
  );
  return SanPham;
};
