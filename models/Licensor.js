'use strict';
module.exports = (sequelize, DataTypes) => {
    var Licensor = sequelize.define('licensor', {
        mal_id: DataTypes.INTEGER,
        name: DataTypes.STRING
    }, {});
    Licensor.associate = function(models) {
        // associations can be defined here
    };
    return Licensor;
};
