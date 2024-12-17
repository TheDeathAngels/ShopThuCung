'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KhachHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KhanhcHang.init({
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    CustomerName: DataTypes.STRING,
    Avatar: DataTypes.STRING,
    PhoneNumber: DataTypes.INTEGER,
    RegisterDate: DataTypes.DATE,
    UpdateDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'KhachHang',
  });
  return KhachHang;
};