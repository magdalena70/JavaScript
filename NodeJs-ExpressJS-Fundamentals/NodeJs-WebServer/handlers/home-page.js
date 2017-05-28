const fs = require('fs')

module.exports = (request, response) => {
    if(request.path === '/'){
        fs.readFile('./index.html', (err, data) => {
                if(err){
                    console.log(err)
                    return
                }

                response.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                response.write(data)      
                response.end() 
            })
    } else {
        return true
    }
}

