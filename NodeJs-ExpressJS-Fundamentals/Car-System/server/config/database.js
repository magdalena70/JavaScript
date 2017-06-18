const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const User = require('../data/User')

require('../data/Car')
require('../data/Renting')

module.exports = (settings) => {
    mongoose.connect(settings.db)
    
    let db = mongoose.connection
    db.once('open', error => {
        if(error){
             throw error 
        }

        console.log('MongoDB is ready!')

        User.seedAdminUser()
    })

    db.on('error', error => {
        console.log(`Database error: ${error}`)
    })
}