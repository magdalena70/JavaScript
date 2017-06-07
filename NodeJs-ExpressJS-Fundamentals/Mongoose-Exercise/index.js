const database = require('./database')
const instanodeDb = require('./instanode-db')
//const MIN_DATE = new Date(-8640000000000000)
//const MAX_DATE = new Date(8640000000000000)

let minDate = '2017-05-22'
let newImageObj = {
    url: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
    description: 'such cat much wow',
    tags: ['cat', 'kitty', 'cute', 'catstagram']
}

database()
    .then(() => {
        // Problem 3. Add saving of images
        instanodeDb.saveImage(newImageObj)  
        
        //// Problem 4. Add search by tag
        //instanodeDb.findByTag('cat')
        //instanodeDb.findByTag('catyyy')   

        ////Problem 5. Filter by date
        // instanodeDb.filter({after: minDate})
        //     .then((images) => {
        //         console.log(images)
        //     })
    })
    .catch((error) => {
        console.log(error)
    })