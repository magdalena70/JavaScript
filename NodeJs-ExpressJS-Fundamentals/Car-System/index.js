const express = require('express')

const environment = process.env.NODE_ENV || 'development'
const settings = require('./server/config/settings')[environment]

let app = express()

require('./server/config/database')(settings)
require('./server/config/express')(app)
require('./server/config/routes')(app)
require('./server/config/passport')()

app.listen(settings.port)

console.log(`Server lstening on port ${settings.port}`)