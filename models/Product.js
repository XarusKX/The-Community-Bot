'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('product', {
    title: DataTypes.STRING,
    link: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
      Product.hasOne(ProductType, {
          foreignKey: 'product_type'
      });
      Product.hasOne(User, {
          foreignKey: 'user'
      });
  };
  return Product;
};
