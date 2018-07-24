'use strict';
module.exports = (sequelize, DataTypes) => {
    var AnimeTheme = sequelize.define('anime_theme', {
        anime: DataTypes.INTEGER,
        title: DataTypes.STRING,
        type: DataTypes.STRING
    }, {});
    AnimeTheme.associate = function(models) {
        AnimeTheme.hasOne(Anime, {
            foreignKey: 'anime'
        });
    };
    return AnimeTheme;
};
