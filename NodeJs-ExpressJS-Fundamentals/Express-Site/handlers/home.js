const Recipe = require('../models/Recipe')

module.exports.index = (req, res) => {
    Recipe.find().then((data) => {
        res.render('home/index', {recipes: data})
    })
}

module.exports.about = (req, res) => {
    res.render('home/about')
}

module.exports.contacts = (req, res) => {
    res.render('home/contacts')
}