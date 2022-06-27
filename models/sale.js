'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

         //La parte belongsTo (pertenece a) S I E M P R E se anota en la tabla intermedia, que en este caso es esta misma, Rental.
            Sale.belongsTo(models.User, {
         //userId es la clave importada en este caso
            foreignKey: 'customerId'
          });
            
            Rental.belongsTo(models.Video, {
          //userId es la clave importada en este caso
            foreignKey: 'videoId'
          });
    }
  }
  Sale.init({
    customerID: DataTypes.INTEGER,
    videoID: DataTypes.INTEGER,
    sale_price: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    invoiceID: DataTypes.STRING,
    sale_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};