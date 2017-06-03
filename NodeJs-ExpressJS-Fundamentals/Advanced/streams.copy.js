const fs = require('fs')
const zlib = require('zlib')

let readStream = fs.createReadStream('streams.js')
let writeStreamCopy = fs.createWriteStream('streams.copy.js')
let writeStreamGzip = fs.createWriteStream('stream.js.gz')
let gzip = zlib.createGzip()

let resultArr = []
let resultStr = ''
readStream.on('data', (data) => {
    resultArr.push(data)
    resultStr += data
    //res.write(data) -> for web
})
readStream.on('end', () => {
    console.log(resultArr)
    console.log(resultStr)
    //res.end() -> for web
})

readStream.pipe(writeStreamCopy)
readStream.pipe(gzip).pipe(writeStreamGzip)