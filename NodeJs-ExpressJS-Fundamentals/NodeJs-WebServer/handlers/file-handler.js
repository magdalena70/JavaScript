const fs = require('fs')

let getContentType = (url) => {
    let contentType = 'text/playn'
    if(url.endsWith('.css')){
        contentType = 'text/css'
    }else if(url.endsWith('.js')){
        contentType = 'application/javascript'
    }
    
    return contentType
}

module.exports = (request, response) => {
    fs.readFile('.' + request.path, (err, data) => {
                if(err){
                    response.writeHead(404)
                    response.write('<h1>404 Not Found</h1>')
                    response.end()
                    return
                }

                response.writeHead(200, {
                    'Content-Type': getContentType(request.path)
                })
                response.write(data)
                response.end()
            })
}