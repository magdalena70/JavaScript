const handlers = require('../handlers')
const multer = require('multer')
let uploadRecipeImage = multer({dest: './public/images/recipe'})
let uploadArticleImage = multer({dest: './public/images/article'})

module.exports = (app) => {
    app.get('/', handlers.home.index)
    app.get('/about', handlers.home.about)
    app.get('/contacts', handlers.home.contacts)  

    app.get('/recipe/add', handlers.recipe.addGet) 
    app.post('/recipe/add', uploadRecipeImage.single('image'), handlers.recipe.addPost) 

    app.get('/article/add', handlers.article.addGet)
    app.post('/article/add', uploadArticleImage.single('image'), handlers.article.addPost)
    app.get('/article/all', handlers.article.all)    
}