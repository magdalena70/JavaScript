const fs = require('fs')

module.exports = (request, response) => {
    if(request.path === '/favicon.ico'){
        fs.readFile('./favicon.ico', (err, data) => {
               if(err){
                   console.log(err)
                   return
               }
               
                response.writeHead(200, {
                        'Content-Type': 'image/x-icon'                    
                })
                response.write(data)
                response.end()
            })
    } else {
        return true
    }
}