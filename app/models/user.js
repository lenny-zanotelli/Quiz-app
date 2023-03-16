const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model{}

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING
    }
},{
    sequelize: sequelize,
    tableName: "user"
});

module.exports = User;