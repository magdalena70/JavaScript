const http = require('http')
const url = require('url')
const handlers = require('./handlers')
const port = 9900


http
    .createServer((request, response) => {
        request.path = url.parse(request.url).pathname
        //console.log(`path ${request.path}`)

        for(let handler of handlers){
            let next = handler(request, response)
            if(!next){
                break
            }
        }
    })
    .listen(port)

    console.log(`Web Server listening on port ${port}`)