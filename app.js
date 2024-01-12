const express = require("express");

const router = require("./src/core/v1/routers/router");
const { Sequelize } = require("sequelize");

const cors = require("cors");
const sequelize = require("./src/core/databases/init");
const router = require("./src/core/v1/routers/router");
const VerifyAuth = require("./src/middlewares/auth/VerifyAuth");

require("dotenv").config();

const PORT = process.env.PORT || 80;

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

app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});


app.use(router);


app.get("/", (_, res) => {
  res.status(200).json({
    statusCode: 1,
    message: "Welcome To The Betternship API",
  });
});

app.get('/test', VerifyAuth)
app.use((_, res, __) => {
  res.status(404).json({
    statusCode: 0,
    message: "That content does not exist.",
  });
});

module.exports = sequelize;
