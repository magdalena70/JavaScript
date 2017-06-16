const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')
const REQUIRE_VALIDATION_MESSAGE = `{PATH} is requred!`

let userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: REQUIRE_VALIDATION_MESSAGE, 
        unique: true},
    firstName: {
        type: String, 
        required: REQUIRE_VALIDATION_MESSAGE},
    lastName: {
        type: String, 
        required: REQUIRE_VALIDATION_MESSAGE},
    salt: String,
    hashedPass: String,
    roles: [String]
})

userSchema.method({
    authenticate: (password) => {
        return encryption
            .generateHashedPassword(this.salt, password) === this.hashedPass
    }
})

let User = mongoose.model('User', userSchema)
module.exports = User
module.exports.seedAdminUser = () => {
    User.find({}).then((users) => {
        if(users.length > 0) {
            return
        }

        let salt = encryption.generateSalt()
        let hashedPass = encryption.generateHashedPassword(salt, 'somePass123')
        User.create({
            username: 'admin',
            firstName: 'Admin',
            lastName: 'Admin',
            salt: salt,
            hashedPass: hashedPass,
            roles: ['Admin']
        })
    })
}