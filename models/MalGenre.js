'use strict';
module.exports = (sequelize, DataTypes) => {
  var MalGenre = sequelize.define('mal_genre', {
    mal_id: DataTypes.INTEGER,
    genre: DataTypes.INTEGER
  }, {});
  MalGenre.associate = function(models) {
    // associations can be defined here
  };
  return MalGenre;
};
