'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserRole = sequelize.define('user_role', {
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
