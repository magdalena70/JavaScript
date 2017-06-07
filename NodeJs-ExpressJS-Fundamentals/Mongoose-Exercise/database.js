const mongoose = require('mongoose')

let connection = 'mongodb://localhost:27017/instanode-db'

module.exports = () => {
    return new Promise((resolve, reject) => {
        mongoose.Promise = global.Promise
        mongoose.connect(connection, (error) => {
            if(error){
                console.log(error)
                return
            }
        })
        
        let database = mongoose.connection
        database.once('open', (error) => {
            if(error){
                console.log(error)
                return
            }

            console.log('Connected to MongoDB successfully.')
            resolve()
        })

        database.on('error', (error) => {
            console.log(error)
            reject()
        })
    })
}