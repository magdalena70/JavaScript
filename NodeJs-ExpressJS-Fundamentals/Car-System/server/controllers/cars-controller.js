const Car = require('mongoose').model('Car')
const Renting = require('mongoose').model('Renting')

module.exports = {
    all: (req, res) => {
        let pageSize = 2
        let pageStr = req.query.page || 1
        page = parseInt(pageStr)
        let search = req.query.search
        let query = Car.find({isRented: false})

        if(search){
            query = query.where('make').regex(new RegExp(search, 'i'))
        }

        query
            .sort('-createdOn')
            .skip((page - 1) * pageSize)
            .limit(pageSize)
            .then((cars) => {
                res.render('cars/all', {
                    cars: cars,
                    hasPrevPage: page > 1,
                    hasNextPage: cars.length > 0,
                    prevPage: page - 1,
                    nextPage: page + 1,
                    page: page,
                    search: search
                })
            })
    },
    rentPost: (req, res) => {
        let userId = req.user._id
        let carId = req.params.id
        let days = parseInt(req.body.days)

        Car.findById(carId)
            .then(car => {
                if(car.isRented){
                    res.locals.globalError = `Error! Car is already rented!`                    
                    res.redirect('cars/all')  
                    return                  
                }

                Renting.create({
                    user: userId,
                    car: carId,
                    days: days,
                    totalPrice: car.pricePerDay * days,
                    startDate: Date.now()
                })
                .then(renting => {
                    car.isRented = true
                    car.save()
                        .then(car => {
                            res.redirect('../../users/profile')
                        })
                })
                .catch(error => {
                    res.locals.globalError = `Error! ${error.message}`
                    res.redirect('cars/all')
                    return
                })
            })
            .catch(error => {
                res.locals.globalError = `Error! ${error.message}`
                res.redirect('cars/all')
                return
            })
    },
    addGet: (req, res) => {
        res.render('cars/add')
    },
    addPost: (req, res) => {
        let reqCar = req.body

        if(!reqCar){
            res.locals.globalError = 'Empty data!'
            return
        }

        Car.create({
            make: reqCar.make,
            model: reqCar.model,
            year: reqCar.year,
            pricePerDay: reqCar.pricePerDay,
            power: reqCar.power,
            image: reqCar.image
        }).then(car => {
            res.redirect('cars/all')
        }).catch(error => {
            //console.log(error)
            res.locals.globalError = `Error! ${error.message}`
            res.render('cars/add', reqCar)
            return
        })
    }
}