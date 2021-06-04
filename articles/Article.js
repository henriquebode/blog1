const { STRING } = require("sequelize");
const Sequelize = require("sequelize");
const Category = require("../categories/Category");
const connection = require("../database/database");

const Article = connection.define('article',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article);
Article.belongsTo(Category);

// Article.sync({force:true});

module.exports = Article;