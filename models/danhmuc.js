"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DanhMuc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DanhMuc.hasMany(models.SanPham, {
        foreignKey: "CategoryID",
      });
      DanhMuc.hasMany(models.DichVu, {
        foreignKey: "CategoryID",
      });
    }
  }
  DanhMuc.init(
    {
      CategoryID: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Khóa chính của bảng
        autoIncrement: true,
      },
      CategoryName: DataTypes.STRING,
      Image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "DanhMuc",
      tableName: "danhmuc",
      timestamps: false,
    }
  );
  return DanhMuc;
};
