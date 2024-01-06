const { DataTypes } = require("sequelize");
const sequelize = require("../../core/databases/init");
const Account = require("../models/Account");
const { Role } = require("../enums/Enums");

const User = sequelize.define(
  "User",
  {
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
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(...Role),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    underscored: false,
    indexes: [
      {
        fields: ["firstName", "lastName"],
      },
    ],
  }
);

module.exports = User;
