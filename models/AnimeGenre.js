'use strict';
module.exports = (sequelize, DataTypes) => {
  var AnimeGenre = sequelize.define('anime_genre', {
    anime: DataTypes.INTEGER,
    mal_genre: DataTypes.INTEGER
  }, {});
  AnimeGenre.associate = function(models) {
    // associations can be defined here
  };
  return AnimeGenre;
};
