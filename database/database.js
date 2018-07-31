const Sequelize = require('sequelize');
const Config = require('../config/main-config');

const User = require('../models/User');
const UserRole = require('../models/UserRole');
const Role = require('../models/Role');
const ProductType = require('../models/ProductType');
const Product = require('../models/Product');
const Webtoon = require('../models/Webtoon');

const Anime = require('../models/Anime');
const AnimeGenre = require('../models/AnimeGenre');
const AnimeLicensor = require('../models/AnimeLicensor');
const AnimeProducer = require('../models/AnimeProducer');
const AnimeStudio = require('../models/AnimeStudio');
const AnimeTheme = require('../models/AnimeTheme');
const Genre = require('../models/Genre');
const Licensor = require('../models/Licensor');
const MalGenre = require('../models/MalGenre');
const Producer = require('../models/Producer');
const Studio = require('../models/Studio');

const CompetitiveProgrammingProblem = require('../models/CompetitiveProgrammingProblem');

class Database {
    constructor() {
        this.Db = new Sequelize(Config.db[0].name, Config.db[0].user, Config.db[0].password, {
            host: Config.db[0].host,
            dialect: "mysql",
            operatorAliases: false,
            define: {
                freezeTableName: true
            }
        });

        this.User = User(this.Db, Sequelize);
        this.UserRole = UserRole(this.Db, Sequelize);
        this.Role = Role(this.Db, Sequelize);
        this.ProductType = ProductType(this.Db, Sequelize);
        this.Product = Product(this.Db, Sequelize);
        this.Webtoon = Webtoon(this.Db, Sequelize);

        this.Anime = Anime(this.Db, Sequelize);
        this.AnimeGenre = AnimeGenre(this.Db, Sequelize);
        this.AnimeLicensor = AnimeLicensor(this.Db, Sequelize);
        this.AnimeProducer = AnimeProducer(this.Db, Sequelize);
        this.AnimeStudio = AnimeStudio(this.Db, Sequelize);
        this.AnimeTheme = AnimeTheme(this.Db, Sequelize);
        this.Genre = Genre(this.Db, Sequelize);
        this.Licensor = Licensor(this.Db, Sequelize);
        this.MalGenre = MalGenre(this.Db, Sequelize);
        this.Producer = Producer(this.Db, Sequelize);
        this.Studio = Studio(this.Db, Sequelize);

        this.CompetitiveProgrammingProblem = CompetitiveProgrammingProblem(this.Db, Sequelize);
    }
}

module.exports.db1 = new Database();
