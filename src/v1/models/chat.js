const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Chat = sequelize.define('Chat', {
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  senderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  isSent: {
    type: DataTypes.BOOLEAN,
    defaultValue: false 
  },
  isDelivered: {
    type: DataTypes.BOOLEAN,
    defaultValue: false 
  },
  isRead: {
    type: DataTypes.BOOLEAN,
    defaultValue: false 
  }
});

module.exports = Chat;
