const { DataTypes } = require("sequelize");
const sequelize = require("../../core/databases/init");
const Account = require("../../core/v1/models/auth/Account");

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
  },
  {
    tableName: "users",
  }
);

User.hasOne(Account, {
  onDelete: "CASCADE",
  as: "user"
});

module.exports = User;
