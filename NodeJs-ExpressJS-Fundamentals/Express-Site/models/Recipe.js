const mongoose = require('mongoose')

let recipeSchema = mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true, unique: true},
    description: {type: mongoose.Schema.Types.String, required: true},
    image: {type: mongoose.Schema.Types.String}
})

let Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe