'use strict';
module.exports = (sequelize, DataTypes) => {
    var Webtoon = sequelize.define('webtoon', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        genre: DataTypes.STRING,
        image: DataTypes.STRING,
        link: DataTypes.STRING,
        likes: DataTypes.INTEGER
    }, {});
    Webtoon.associate = function(models) {
        // associations can be defined here
    };
    return Webtoon;
};
