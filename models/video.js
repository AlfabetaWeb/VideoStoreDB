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

      Video.hasMany(models.rental, {
        //En este caso, foreignKey hace referencia a como se llama la clave de user en la tabla rental
        foreignKey: 'videoID'
      });

    }
  }
  Video.init({
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    duration: DataTypes.STRING,
    age_rate: DataTypes.STRING,
    movie_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};