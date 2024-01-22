const swaggerJsdoc = require("swagger-jsdoc");
const educationDoc = require("./src/documentation/swagger/education");
const options = {
  swaggerDefinition: {
    info: {
      title: "Betternship API Documentation",
      version: "1.0.0",
      description: "The API documentation for the client Side",
    },
  },
  apis: ["./src/documentation/swagger/*.js"],
};


const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
