const { STRING } = require("sequelize");
const Sequelize = require("sequelize");
const connection = require("../database/database");


const Category = connection.define('categorie',{
    title:{
        type: STRING,
        allowNull: false
    },
    slug:{
        type:STRING,
        allowNull: false
    }    
});

//Category.sync({force:true});

module.exports = Category;