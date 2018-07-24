'use strict';
module.exports = (sequelize, DataTypes) => {
    var Product = sequelize.define('product', {
        product_type: DataTypes.INTEGER,
        user: DataTypes.INTEGER,
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
