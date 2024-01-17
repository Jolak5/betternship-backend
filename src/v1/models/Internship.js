const { DataTypes } = require("sequelize");
const sequelize = require("../../core/database/init");
const { InternshipOptions } = require('./enums/Enums');

const InternshipApplication = sequelize.define(
  "InternshipApplication",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    internDuration: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Intern Duration is required" },
        isIn: {
          args: [InternshipOptions.internDuration],
          msg: "Invalid intern duration",
        },
      },
    },
    internType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Intern Type is required" },
        isIn: {
          args: [InternshipOptions.internType],
          msg: "Invalid intern type",
        },
      },
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Job Title is required" },
        isIn: {
          args: [InternshipOptions.jobTitles],
          msg: "Invalid job title",
        },
      },
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Experience is required" },
      },
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Skills are required" },
      },
    },
    englishProficiency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "English Language Proficiency is required" },
        isIn: {
          args: [InternshipOptions.englishProficiency],
          msg: "Invalid English proficiency level",
        },
      },
    },
  },
  {
    tableName: "internship_applications",
    underscored: false,
  }
);

module.exports = InternshipApplication;
