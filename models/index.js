import dbConfig from '../config/dbConfig.js'
import Sequelize from 'sequelize'

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorials.js")(sequelize, Sequelize);
db.comments = require("./comments.js")(sequelize, Sequelize);
db.tutorials.hasMany(db.comments, {foreignKey:'tutorialId',onDelete: 'cascade'});
db.comments.belongsTo(db.tutorials,{foreignKey:'tutorialId',onDelete: 'cascade'})
module.exports = db;