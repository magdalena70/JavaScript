const encryption = require('../utilities/encryption')
const User = require('mongoose').model('User')

module.exports = {
    registerGet: (req, res) => {
        res.render('users/register')
    },
    registerPost: (req, res) => {
        let reqUser = req.body
        //console.log(reqUser)
        if(reqUser.username.length < 3 &&
            reqUser.username.length > 10 ){
            res.locals.globalError = 'Username must be in range: [x > 3 and x < 10]'           
            res.render('users/register', reqUser) 
            return                           
        }

        if(reqUser.password !== reqUser.confirmPassword){
            res.locals.globalError = 'Password and Confirm Password must be equal.'           
            res.render('users/register', reqUser) 
            return 
        }

        let salt = encryption.generateSalt()
        let hashedPass = encryption.generateHashedPassword(salt, reqUser.password)
        User.create({
            username: reqUser.username,
            firstName: reqUser.firstName,
            lastName: reqUser.lastName,
            salt: salt,
            hashedPass: hashedPass
        }).then(dbUser => {
            req.logIn(dbUser, (error, dbUser) => {
                if(error){
                    res.locals.globalError = error
                    res.render('users/register', dbUser)                    
                }
                
                res.redirect('/')
            })
        })
    },
    logout: (req, res) => {
        req.logout()
        res.redirect('/')
    },
    loginGet: (req, res) => {
        res.render('users/login')
    },
    loginPost: (req, res) => {
        let reqUser = req.body
        User.findOne({username: reqUser.username}).then((user) => {
            if(!user) {
                res.render('users/login', {globalError: `Error: Invalid data!`})
                return
            }

            console.log(user)
            let salt = user.salt
            let hashedPass = user.hashedPass
            let reqHashedPass = encryption
                .generateHashedPassword(salt, reqUser.password)
            if(hashedPass !== reqHashedPass){
                res.render('users/login', {globalError: 'Invalid data!'})
            }else{
                req.logIn(user, (error, user) => {
                    if(error){
                        res.render('users/login', {globalError: `Error: ${error}`})
                        return
                    }

                    res.redirect('/')
                })
            }
        })
    }
}