"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChiTietDonHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChiTietDonHang.belongsTo(models.DonHang, {
        foreignKey: "OrderID",
      });
      ChiTietDonHang.belongsTo(models.SanPham, {
        foreignKey: "ProductID",
      });
      ChiTietDonHang.belongsTo(models.CuaHang, {
        foreignKey: "StoreID",
      });
      ChiTietDonHang.belongsTo(models.DichVu, {
        foreignKey: "ServiceID",
      });
    }
  }
  ChiTietDonHang.init(
    {
      OrderID: DataTypes.INTEGER,
      ProductID: DataTypes.INTEGER,
      StoreID: DataTypes.INTEGER,
      ServiceID: DataTypes.INTEGER,
      Quantity: DataTypes.INTEGER,
      Price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ChiTietDonHang",
      tableName: "chitietdonhang",
      timestamps: false,
    }
  );
  return ChiTietDonHang;
};
