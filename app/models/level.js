const sequelize = require('../db');
const {Model, DataTypes} = require('sequelize');

class Level extends Model {}

Level.init({ 
   name: {
    type: DataTypes.TEXT, 
    allowNull: false, 
   }
}, {
    sequelize: sequelize, 
    tableName: 'level' 
});


module.exports = Level;