'use strict';
module.exports = (sequelize, DataTypes) => {
    var AnimeLicensor = sequelize.define('anime_licensor', {
        anime: DataTypes.INTEGER,
        licensor: DataTypes.INTEGER
    }, {});
    AnimeLicensor.associate = function(models) {
        AnimeGenre.hasOne(Anime, {
            foreignKey: 'anime'
        });
    };
    return AnimeLicensor;
};
