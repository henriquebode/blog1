const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'henrique', '342124', {
    host: 'localhost',
    dialect:'mysql',
    timezone: '-03:00'
});

module.exports = connection;
