const sequelize = require("../../core/database/init");
const { DataTypes } = require("sequelize");

const Message = sequelize.define(
  "Message",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    senderId: {
      type: DataTypes.UUID,
      references: {
        model: "accounts",
        key: "id",
      },
    },
    recipientId: {
      type: DataTypes.UUID,
      references: {
        model: "accounts",
        key: "id",
      },
    },
    isDelivered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    content: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Message;
