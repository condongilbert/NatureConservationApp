// backend/models/Task.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Task;