const { DataTypes } = require("sequelize");
const sequelize = require("../../core/database/init");
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
    about: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    skills: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
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
