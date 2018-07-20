'use strict';
module.exports = (sequelize, DataTypes) => {
  var AnimeLicensor = sequelize.define('anime_licensor', {
    anime: DataTypes.INTEGER,
    licensor: DataTypes.INTEGER
  }, {});
  AnimeLicensor.associate = function(models) {
    // associations can be defined here
  };
  return AnimeLicensor;
};
