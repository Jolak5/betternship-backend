const { Sequelize, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../../../../app");

const BaseModel = sequelize.define("BaseModel", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
});
