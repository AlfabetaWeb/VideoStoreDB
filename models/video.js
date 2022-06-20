'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Video.init({
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    duration: DataTypes.STRING,
    age_rate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};