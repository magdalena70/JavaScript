const url = require('url')
const fs = require('fs')
const path = require('path')
const database = require('../config/database')
const qs = require('querystring')

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname

    if(req.pathname === '/' && req.method === 'GET'){
        let filePath = path.normalize(
            path.join(__dirname, '../views/home/index.html'))
        fs.readFile(filePath, (err, data) => {
            if(err){
                console.log(err)
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                })

                res.write('404 Not Found')
                res.end()
                return
            }

            let queryData = qs.parse(url.parse(req.url).query)
            let content = ''

            if(queryData.query){
                let product = database.products.findByName(queryData.query)
                if(product){
                    content+=
                    `<div class="product-card">
                        <img class="product-img" src="${product.image}">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                    </div>`
                }
                
            } else {
                let products = database.products.getAll() 

                for(let product of products){
                    content+=
                    `<div class="product-card">
                        <img class="product-img" src="${product.image}">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                    </div>`
                }           
            }

            
          
            let html = data.toString().replace('{content}', content)

            res.writeHead(200, {
                'Content-Type': 'text/html'
            })

            res.write(html)
            res.end()
        })
    } else {
        return true
    }
}