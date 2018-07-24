'use strict';
module.exports = (sequelize, DataTypes) => {
    var product_type = sequelize.define('product_type', {
        name: DataTypes.STRING
    }, {});
    product_type.associate = function(models) {

    };
    return product_type;
};
