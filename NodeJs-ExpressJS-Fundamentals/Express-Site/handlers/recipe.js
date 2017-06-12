const Recipe = require('../models/Recipe')

module.exports.addGet = (req, res) => {
    res.render('recipe/add')
}

module.exports.addPost = (req, res) => {
    let recipeObj = req.body
    let file = req.file //it's info about new file
    recipeObj.image = `../public/images/recipe/${file.filename}`
    Recipe.create(recipeObj).then(() => {
        res.redirect('/')
    })
}