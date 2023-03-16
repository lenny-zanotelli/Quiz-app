const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Answer extends Model{};

Answer.init({
  description: { 
    type: DataTypes.STRING, 
    allowNull: false}, 
},{
  sequelize: sequelize, 
  tableName: "answer"

})

module.exports = Answer;