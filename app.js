const express = require("express");
const router = require("./src/core/v1/routers/router");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const PORT = process.env.PORT || 80;
const databaseName = process.env.POSTGRES_DATABASE;
const userName = process.env.POSTGRESQL_USERNAME;
const host = process.env.POSTGRESQL_HOST;
const password = process.env.POSTGRESQL_KEY;


const sequelize = new Sequelize(databaseName, userName, password, {
  host,
  dialect: "postgres",
});

const TestConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "PostgreSQL database connection has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

TestConnection();

const app = express();
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});


app.get("/", (_, res) => {
  res.status(200).json({
    statusCode: 1,
    message: "Welcome To The Betternship API",
  });
});

app.use((_, res, __) => {
  res.status(404).json({
    statusCode: 0,
    message: "That content does not exist.",
  });
});

module.exports = sequelize;