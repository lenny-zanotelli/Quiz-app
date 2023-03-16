const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Tag extends Model{}

Tag.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    sequelize: sequelize,
    tableName: "tag"
});

module.exports = Tag;