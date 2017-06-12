const homeHandler = require('./home')
const recipeHandler = require('./recipe')
const articleHandler = require('./article')

module.exports = {
    home: homeHandler,
    recipe: recipeHandler,
    article: articleHandler
}