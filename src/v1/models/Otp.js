const { DataTypes } = require("sequelize");
const sequelize = require("../../core/databases/init");

const OTP = sequelize.define(
  "Otp",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    accountId: {
      type: DataTypes.UUID,
      references: {
        model: "accounts",
        key: "id",
      },
    },
    data: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    expiresOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isExpired: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    trialCount: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
  },
  {
    tableName: "otps",
    timestamps: true,
  }
);

module.exports = OTP;
