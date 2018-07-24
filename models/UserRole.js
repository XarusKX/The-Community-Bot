'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserRole = sequelize.define('user_role', {
        user: DataTypes.INTEGER,
        role: DataTypes.INTEGER
    }, {});
    UserRole.associate = function(models) {
        UserRole.hasOne(User, {
            foreignKey: 'user'
        });
        UserRole.hasOne(Role, {
            foreignKey: 'role'
        });
    };
    return UserRole;
};
