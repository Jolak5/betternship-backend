const swaggerJsdoc = require("swagger-jsdoc");
const swaggerAutogen = require("swagger-autogen")();
const options = {
  swaggerDefinition: {
    info: {
      title: "Betternship API Documentation",
      version: "1.0.0",
      description: "The API documentation for the client Side",
    },
  },
  apis: ["./src/core/v1/routers/router.js", "./src/v1/routers/auth/auth.js"],
};

const outputFile = "./swagger-output.json";

const routes = [
  "./src/v1/routers/auth/auth.js",
  "./src/core/v1/routers/router.js",
];

swaggerAutogen(outputFile, routes);

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
