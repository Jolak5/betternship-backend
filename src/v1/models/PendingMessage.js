const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../core/database/init");

const PendingMessage = sequelize.define("PendingMessage", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  senderId: {
    type: DataTypes.UUID,
    references: {
      model: "accounts",
      key: "id",
    },
  },
  recipientId: {
    type: DataTypes.STRING,
    references: {
      model: "accounts",
      key: "id",
    },
  },
  content: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
});

module.exports = PendingMessage;
