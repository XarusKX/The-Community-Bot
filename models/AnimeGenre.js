'use strict';
module.exports = (sequelize, DataTypes) => {
  var AnimeGenre = sequelize.define('anime_genre', {
    anime: DataTypes.INTEGER,
    mal_genre: DataTypes.INTEGER
  }, {});
  AnimeGenre.associate = function(models) {
      AnimeGenre.hasOne(Anime, {
          foreignKey: 'anime'
      });
  };
  return AnimeGenre;
};
