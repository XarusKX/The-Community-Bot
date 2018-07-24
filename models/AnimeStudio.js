'use strict';
module.exports = (sequelize, DataTypes) => {
    var AnimeStudio = sequelize.define('anime_studio', {
        anime: DataTypes.INTEGER,
        studio: DataTypes.INTEGER
    }, {});
    AnimeStudio.associate = function(models) {
        AnimeStudio.hasOne(Anime, {
            foreignKey: 'anime'
        });
    };
    return AnimeStudio;
};
