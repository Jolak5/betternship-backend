const { DataTypes } = require("sequelize");
const sequelize = require("../../../databases/init");

const Account = sequelize.define(
  "Account",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      field: "id",
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "username is required" },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "First Name is required" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "password is required" },
      },
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: "user",
      validate: {
        isIn: [["user", "employer", "jobseeker"]],
      },
    },
    lastLogin: {
      type: DataTypes.DATE,
    },
    isTrashed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "accounts",
    underscored: false,
  }
);

module.exports = Account;
