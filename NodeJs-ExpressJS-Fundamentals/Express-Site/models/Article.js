const mongoose = require('mongoose')

let articleSchema = mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true, unique: true},
    description: {type: mongoose.Schema.Types.String, required: true},
    image: {type: mongoose.Schema.Types.String}
})

let Article = mongoose.model('Article', articleSchema)
module.exports = Article