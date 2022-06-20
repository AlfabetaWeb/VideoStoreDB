'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rental.init({
    customerID: DataTypes.INTEGER,
    videoID: DataTypes.INTEGER,
    price: DataTypes.STRING,
    payment_method: DataTypes.STRING,
    rental_date: DataTypes.DATE,
    return_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Rental',
  });
  return Rental;
};