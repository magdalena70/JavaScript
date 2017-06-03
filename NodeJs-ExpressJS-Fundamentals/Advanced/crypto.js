let crypto = require('crypto')

let generateSalt = () => {
    return crypto.randomBytes(128).toString('base64')
}

let generateHshedPass = (hashSalt, userPass) => {
    let hmac = crypto.createHmac('sha256', salt)
    return hmac.update(userPass).digest('hex')
}

let salt = generateSalt()
//console.log(salt)

let pass = 'Magy_123'
let hashedPass = generateHshedPass(salt, pass)
console.log(hashedPass)

