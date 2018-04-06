const Sequelize = require("sequelize");
const Config = require("../config.js");

class Database {
  constructor() {
    this.Db = new Sequelize(Config.db[0].name, Config.db[0].user, Config.db[0].password, {
      host:Config.db[0].host,
      dialect: "mysql",
      operatorAliases: false,
    });

    this.Users = this.Db.define("users", {
      id: {
        type: Sequelize.INTEGER(6).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      link: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER(6).UNSIGNED,
        allowNull: false
      },
      product_type_id: {
        type: Sequelize.INTEGER(3).UNSIGNED,
        allowNull: false
      },
    })

    this.Webtoon = this.Db.define("webtoons", {
      id: {
        type: Sequelize.INTEGER(6).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true
      },
      author: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING(48),
        allowNull: true
      },
      image: {
        type: Sequelize.STRING(256),
        allowNull: true
      },
      link: {
        type: Sequelize.STRING(256),
        allowNull: true
      },
      likes: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false
      },
    })

  }
}

module.exports.db1 = new Database();
