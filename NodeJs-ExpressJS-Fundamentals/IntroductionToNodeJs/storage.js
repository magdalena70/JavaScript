const fs = require('fs')
const fileName = 'storage.dat'

let data = {}

//validations
let checkIfKeyIsString = (key) => {
    if (typeof key !== 'string'){
        throw new Error('Key must be a string')
    }
}

let checkIfKeyDoesNotExists = (key) => {
    if (!data.hasOwnProperty(key)){
        throw new Error('Key does not exists')
    }
}

let checkIfKeyExists = (key) => {
     if (data.hasOwnProperty(key)){
        throw new Error('Key already exists')
    }
}

//put
let put = (key, value) => {
    checkIfKeyIsString(key)
    checkIfKeyExists(key)

    data[key] = value
    console.log(data) //test
}

//get
let get = (key) => {
    checkIfKeyIsString(key)
    checkIfKeyDoesNotExists(key)

    return data[key]
}

//update
let update = (key, value) => {
    checkIfKeyIsString(key)
    checkIfKeyDoesNotExists(key)

    data[key] = value
}

//delete
let deleteData = (key) => {
    checkIfKeyIsString(key)
    checkIfKeyDoesNotExists(key)

    delete(data[key])
}

//clear
let clear = () => {
    data = {}
}

//save
let save = () => {
    let dataAsJson = JSON.stringify(data)
    fs.writeFileSync(fileName, dataAsJson, 'utf8')
}

//load
let load = () => {
   try {
       let dataFromFile = fs.readFileSync(fileName, 'utf8')        
        data = JSON.parse(dataFromFile)
        return data
   } catch (error) {
       //console.log(error)
       return error
   }
}

//save with promise
let savePromise = (callback) => {
    return new Promise((resolve, reject) => {
        let dataJson = JSON.stringify(data)
        fs.writeFile(fileName, dataJson, error => {
            if(error){
                reject(error)
                return
            }

            resolve()
        })
    })
}

//load with promise
let loadPromise = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (error, loadedData) => {
            if(error){
                reject(error)
                return
            }

            data = JSON.parse(loadedData)
            resolve()
        })
    })
}

module.exports = {
    put: put,
    get: get,
    update: update,
    delete: deleteData,
    clear: clear,
    save: save,
    load: load,
    loadPromise: loadPromise,
    savePromise: savePromise
}