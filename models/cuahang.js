'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CuaHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CuaHang.init({
    StoreName: DataTypes.STRING,
    Image: DataTypes.TEXT,
    PhoneNumber: DataTypes.INTEGER,
    StoreAddress: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CuaHang',
  });
  return CuaHang;
};