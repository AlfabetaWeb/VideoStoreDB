
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasMany(models.video, {
        //En este caso, foreignKey hace referencia a como se llama la clave de user en la tabla rental
        foreignKey: 'customerID'
      });

    }
  }
  User.init({
    name: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    customer_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};