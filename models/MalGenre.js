'use strict';
module.exports = (sequelize, DataTypes) => {
    var MalGenre = sequelize.define('mal_genre', {
        genre: DataTypes.INTEGER,
        mal_id: DataTypes.INTEGER
    }, {});
    MalGenre.associate = function(models) {
        MalGenre.hasOne(Genre, {
            foreignKey: 'genre'
        });
    };
    return MalGenre;
};
