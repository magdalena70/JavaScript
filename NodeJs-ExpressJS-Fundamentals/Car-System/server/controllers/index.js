const home = require('./home-controller')
const users = require('./users-controller')
const admin = require('./admin-controller')
const cars = require('./cars-controller')

module.exports = {
    home: home,
    users: users,
    admin: admin,
    cars: cars
}