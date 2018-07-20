'use strict';
module.exports = (sequelize, DataTypes) => {
  var Anime = sequelize.define('anime', {
    mal_id: DataTypes.INTEGER,
    link_canonical: DataTypes.STRING,
    title: DataTypes.STRING,
    image_url: DataTypes.STRING,
    type: DataTypes.STRING,
    source: DataTypes.STRING,
    episodes: DataTypes.INTEGER,
    status: DataTypes.STRING,
    aired_from: DataTypes.DATE,
    aired_to: DataTypes.DATE,
    duration: DataTypes.STRING,
    rating: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    background: DataTypes.TEXT
  }, {});
  Anime.associate = function(models) {
    // associations can be defined here
  };
  return Anime;
};
