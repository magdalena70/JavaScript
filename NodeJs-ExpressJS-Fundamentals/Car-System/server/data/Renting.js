const mongoose = require('mongoose')
const REQUIRE_VALIDATION_MESSAGE = '{PATH} is requred!'

let rentingSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: REQUIRE_VALIDATION_MESSAGE, ref: 'User'},
    car: {type: mongoose.Schema.Types.ObjectId, required: REQUIRE_VALIDATION_MESSAGE, ref: 'Car'},
    days: {type: Number, required: REQUIRE_VALIDATION_MESSAGE, min: 0, max: 100},
    totalPrice: {type: Number, required: REQUIRE_VALIDATION_MESSAGE, min: 0},
    startDate: {type: Date, default: Date.now()}
})

let Renting = mongoose.model('Renting', rentingSchema)
module.exports = Renting