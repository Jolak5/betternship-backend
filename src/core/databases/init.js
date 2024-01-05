const  Sequelize = require("sequelize").Sequelize;
require('dotenv').config()

const databaseName = process.env.POSTGRES_DATABASE;
const userName = process.env.POSTGRESQL_USERNAME;
const host = process.env.POSTGRESQL_HOST;
const password = process.env.POSTGRESQL_KEY;

const sequelize = new Sequelize(databaseName, userName, password, {
  host,
  dialect: "postgres",
});
sequelize.sync()

module.exports = sequelize;
