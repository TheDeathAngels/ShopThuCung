"use strict";
const { Model } = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");
module.exports = (sequelize, DataTypes) => {
  class DonHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DonHang.belongsTo(models.KhachHang, {
        foreignKey: "CustomerID",
      });
      DonHang.hasMany(models.ChiTietDonHang, {
        foreignKey: "OrderID",
      });
    }
  }
  DonHang.init(
    {
      OrderID: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Khóa chính của bảng
        autoIncrement: true,
      },
      CustomerID: DataTypes.INTEGER,
      Status: DataTypes.STRING,
      PaymentMethod: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DonHang",
      tableName: "donhang",
    }
  );
  return DonHang;
};
