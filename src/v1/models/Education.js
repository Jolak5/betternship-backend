const { DataTypes } = require("sequelize");
const sequelize = require("../../core/database/init");
const { Months } = require("../enums/Enums");

const Education = sequelize.define(
  "Education",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    schoolName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "School name is required" },
      },
    },

    userId: {
      type: DataTypes.UUID,
      references: {
        model: "accounts",
        key: "id",
      },
    },
    titleOfDegree: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Title of degree is required"}
      }
    },
    levelOfStudy: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Level of Study is required" },
      },
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Degree is required" },
      },
    },
    fieldOfStudy: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Field of study is required" },
      },
    },
    graduationMonth: {
      type: DataTypes.ENUM(...Months),
      allowNull: false,
      validate: {
        notNull: { msg: "The month of graduation is required" },
      },
    },
    graduationYear: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isInt: {
          msg: "Year must be an integer",
        },
        min: {
          args: [1900],
          msg: "Unless you're a time traveler, graduation year cannot be less than 1900.",
        },
        max: {
          args: [new Date().getFullYear()],
          msg: "Unless you're a time traveler, graduation year cannot be later than the current year.",
        },
      },
    },
  },
  {
    tableName: "educations",
    underscored: false,
  }
);

module.exports = Education;
