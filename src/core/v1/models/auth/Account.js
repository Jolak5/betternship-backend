const { DataTypes } = require("sequelize");
const sequelize = require("../../../../../app");

const Account = sequelize.define("Account", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: "User",
      key: "id",
    },
  },

  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "username is required" },
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
  },
  lastLogin: {
    type: DataTypes.DATE,
  },
});

module.exports = Account;
