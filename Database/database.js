const Sequelize = require("sequelize");
const Config = require("../config.js");

class Database {
  constructor() {
    this.Db = new Sequelize(Config.DB1.DBName, Config.DB1.DBUser, Config.DB1.DBPassword, {
      host: "localhost",
      dialect: "mysql",
      operatorAliases: false,
    });

    this.Users = this.Db.define("users", {
      id: {
        type: Sequelize.INTEGER(6).UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      discord_id: {
        type: Sequelize.STRING(24),
        allowNull: false,
      },
    },
    { timestamps: false });

    this.UserRoles = this.Db.define("user_roles", {
      id: {
        type: Sequelize.INTEGER(8).UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER(6).UNSIGNED,
        allowNull: false
      },
      role_id: {
        type: Sequelize.INTEGER(3).UNSIGNED,
        allowNull: false
      }
    },
    { timestamps: false });

    this.Roles = this.Db.define("roles", {
      id: {
        type: Sequelize.INTEGER(3).UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false
      }
    },
    { timestamps: false });

    this.ProductType = this.Db.define("product_type", {
      id: {
        type: Sequelize.INTEGER(3).UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false
      }
    },
    { timestamps: false });

    this.Products = this.Db.define("products", {
      id: {
        type: Sequelize.INTEGER(12).UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      link: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      product_type_id: {
        type: Sequelize.INTEGER(3).UNSIGNED,
        allowNull: false
      },
    })

  }
}

module.exports.Database = new Database();
