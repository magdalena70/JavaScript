const storage = require('./storage')

//test put
console.log('-----put method-----')
storage.put('one', 'one-value')
storage.put('two', 'two-value')

//test get
console.log('-----get method-----')
console.log(storage.get('one'))

//test update
console.log('-----update method-----')
storage.update('one', 'new-value')
console.log(storage.get('one'))

//test load from no existing file
console.log('-----load data from no existing file-----')
console.log(storage.load())

//test save
console.log('-----save method-----')
storage.save()

//test delete
console.log('-----delete method-----')
storage.delete('one')
//storage.get('one') //throw an error

//test clear
console.log('-----clear method-----')
storage.clear()
//storage.get('two') //throw an error

//test load from existing file
console.log('-----load data from existing file-----')
console.log(storage.load())

//test save with Promise
console.log('-----test promose-----')
storage.put('some-key', 'some-value')//throw an error if key already exists
storage
    .savePromise()
    .then(() => {
        storage.clear()
    })
    .then(
        //test load with Promise
        storage
            .loadPromise()
            .then(
                console.log('{ some-key: \'' + storage.get('some-key') + '\'}')
            )
            .catch(err => console.log(err))
    )
