'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('product', {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    user: DataTypes.INTEGER,
    product_type: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
