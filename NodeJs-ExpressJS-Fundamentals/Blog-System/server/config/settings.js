const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '../../'))
let port = process.env.PORT || 1122

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/blog-system',
        port: port
    },
    production: {}
}