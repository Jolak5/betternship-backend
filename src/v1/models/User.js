const { DataTypes } = require("sequelize");
const sequelize = require("../../../app");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "First Name is required" },
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "First Name is required" },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "First Name is required" },
    },
  },
});
