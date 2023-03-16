const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Question extends Model{};


Question.init({
  question: { type: DataTypes.STRING, allowNull: false}, 
  anecdote: DataTypes.STRING,
  wiki: DataTypes.STRING

},{
  sequelize: sequelize, 
  tableName: "question"

});


module.exports = Question; 