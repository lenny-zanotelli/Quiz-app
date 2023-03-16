const { Sequelize }= require('sequelize');
const pg = require('pg');

require('dotenv').config();

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        underscored: true
    }
});

module.exports = sequelize;