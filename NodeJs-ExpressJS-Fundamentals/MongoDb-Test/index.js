const mongodb = require('mongodb')

let connection = 'mongodb://localhost:27017/myfirstdatabase'

mongodb.MongoClient.connect(connection, (err, db) => {
    if(err){
        console.log(err)
        return
    }

    let cats = db.collection('cats')
    cats.insertMany([
        {name: 'Sivcho', color: 'Gray'},
        {name: 'Rijka', color: 'Yellow'}
    ], (err, result) => {
        if(err){
            console.log(err)
            return
        }

        //console.log(result)
        cats.find().toArray((err, data) => {
            if(err){
                console.log(err)
                return
            }

            console.log(data)
        })
    })
})