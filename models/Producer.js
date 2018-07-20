'use strict';
module.exports = (sequelize, DataTypes) => {
  var Producer = sequelize.define('producer', {
    mal_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Producer.associate = function(models) {
    // associations can be defined here
  };
  return Producer;
};
