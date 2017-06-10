const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = (config) => {
    mongoose.connect(config.connectionString)
    let database = mongoose.connection
    database.once('open', (error) => {
        if(error){
            console.log(error)
        }

        console.log('Connected!')
    })

    database.on('error', (error) => {
        console.log(error)
        return
    })

    require('../models/Product')
    require('../models/Category')    
}
