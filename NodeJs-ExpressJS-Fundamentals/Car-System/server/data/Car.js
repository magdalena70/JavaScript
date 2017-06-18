const mongoose = require('mongoose')
const REQUIRE_VALIDATION_MESSAGE = '{PATH} is requred!'

let carSchema = new mongoose.Schema({
    make: {type: String, required: REQUIRE_VALIDATION_MESSAGE},
    model: {type: String, required: REQUIRE_VALIDATION_MESSAGE},
    year: {type: Number, required: REQUIRE_VALIDATION_MESSAGE,min: 1950, max: new Date().getFullYear()},
    pricePerDay: {type: Number, required: REQUIRE_VALIDATION_MESSAGE, min: 0, max: 100},
    power: {type: Number, min: 0},
    image: {type: String, required: REQUIRE_VALIDATION_MESSAGE},
    createdOn: {type: Date, default: Date.now()},
    isRented: {type: Boolean, default: false}
})

let Car = mongoose.model('Car', carSchema)
module.exports = Car