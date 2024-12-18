'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DanhMuc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DanhMuc.hasMany(models.SanPham,{
        foreignKey: 'CategoryID'
      })
    }
  }
  DanhMuc.init({
    CategoryName: DataTypes.STRING,
    Image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DanhMuc',
    tableName: 'DanhMuc',
    underscored: true
  });
  return DanhMuc;
};