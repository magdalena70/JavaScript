db.getCollections('cars')
    .update({}, {$set: {
        createdOn: Date.now()
    }}, 
    {multi: true})