db.getCollection('rentings').update({}, {$set: {
        startDate: Date.now()
    }}, 
    {multi: true})