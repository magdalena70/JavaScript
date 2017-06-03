const EventEmitter = require('events').EventEmitter

let emitter = new EventEmitter()
emitter.on('myEvent', data => {
    console.log(data)
})

emitter.emit('myEvent', {
    name: 'Some Name',
    age: 55
})