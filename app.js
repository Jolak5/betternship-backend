const express = require("express");
const cors = require("cors");
const http = require("http");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger-output.json");
const sequelize = require("./src/core/database/init");
const router = require("./src/core/v1/routers/router");
const websocket = require("./src/core/communication/websocket");
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
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

websocket(server);
server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(router);


app.get("/", (_, res) => {
  res.status(200).json({
    statusCode: 1,
    message: "Welcome To The Betternship API",
  });
});

app.get("/test", VerifyAuth);
app.use((_, res, __) => {
  res.status(404).json({
    statusCode: 0,
    message: "That content does not exist.",
  });
});

module.exports = sequelize;
