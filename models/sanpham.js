'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SanPham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SanPham.belongsTo(models.CuaHang,{
        foreignKey: 'StoreID'
      })
      SanPham.belongsTo(models.DanhMuc,{
        foreignKey: 'CategoryID'
      })
      SanPham.hasMany(models.ChiTietDonHang,{
        foreignKey: 'ProductID'
      })
    }
  }
  SanPham.init({
    StoreID: DataTypes.INTEGER,
    CategoryID: DataTypes.INTEGER,
    ProductName: DataTypes.STRING,
    Image: DataTypes.TEXT,
    Quantity: DataTypes.INTEGER,
    Price: DataTypes.INTEGER,
    Stack: DataTypes.INTEGER,
    Rate: DataTypes.INTEGER,
    Description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SanPham',
  });
  return SanPham;
};