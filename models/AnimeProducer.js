'use strict';
module.exports = (sequelize, DataTypes) => {
  var AnimeProducer = sequelize.define('anime_producer', {
    producer: DataTypes.INTEGER
  }, {});
  AnimeProducer.associate = function(models) {
      AnimeProducer.hasOne(Anime, {
          foreignKey: 'anime'
      });
  };
  return AnimeProducer;
};
