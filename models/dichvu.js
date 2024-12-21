"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DichVu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DichVu.belongsTo(models.CuaHang, {
        foreignKey: "StoreID",
      });
      DichVu.belongsTo(models.DanhMuc, {
        foreignKey: "CategoryID",
      });
      DichVu.hasMany(models.ChiTietDonHang, {
        foreignKey: "ServiceID",
      });
    }
  }
  DichVu.init(
    {
      ServiceID: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Khóa chính của bảng
        autoIncrement: true,
      },
      StoreID: DataTypes.INTEGER,
      CategoryID: DataTypes.INTEGER,
      ServiceName: DataTypes.STRING,
      ServicePrice: DataTypes.INTEGER,
      Rate: DataTypes.INTEGER,
      Description: DataTypes.STRING,
      Image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "DichVu",
      tableName: "dichvu",
    }
  );
  return DichVu;
};
