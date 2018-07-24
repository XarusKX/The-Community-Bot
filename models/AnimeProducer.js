'use strict';
module.exports = (sequelize, DataTypes) => {
    var AnimeProducer = sequelize.define('anime_producer', {
        anime: DataTypes.INTEGER,
        producer: DataTypes.INTEGER
    }, {});
    AnimeProducer.associate = function(models) {
        AnimeProducer.hasOne(Anime, {
            foreignKey: 'anime'
        });
    };
    return AnimeProducer;
};
