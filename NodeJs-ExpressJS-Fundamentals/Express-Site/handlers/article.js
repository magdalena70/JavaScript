const Article = require('../models/Article')

module.exports.all = (req, res) => {
    Article.find().then((data) => {
        res.render('article/all', {articles: data})
    })
}

module.exports.addGet = (req, res) => {
    res.render('article/add')
}

module.exports.addPost = (req, res) => {
    let articleObj = req.body
    let file = req.file //it's info about new file
    articleObj.image = `../public/images/article/${file.filename}`
    Article.create(articleObj).then(() => {
        res.redirect('/article/all')
    })
}