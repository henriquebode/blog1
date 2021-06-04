const express = require("express");
const router = express.Router();
const Article = require("./Article");
const Category = require("../categories/Category");
const Slugfy = require("slugify");

router.get("/admin/article", (req,res) => {
    Article.findAll().then(article =>{
        res.render("./admin/articles/index", {article: article})
    });
    
}); 

router.get("/admin/article/new", (req,res) => {
    Category.findAll().then(categories =>{
        res.render("./admin/articles/new", {categories: categories});
    })

}); 

router.post("/article/save", (req,res) =>{
    var title = req.body.title;
    var body= req.body.body;
    var category = req.body.category;

    Article.create({
        title: title,
        slug: Slugfy(title),
        body: body,
        categoryId: category
    }).then(()=>{
        res.redirect("/admin/article")
    })

})

module.exports = router;