'use strict';
module.exports = (sequelize, DataTypes) => {
  var product_type = sequelize.define('product_type', {
    name: DataTypes.STRING
  }, {});
  product_type.associate = function(models) {
    // associations can be defined here
  };
  return product_type;
};
