function solve(arr){
    let amount = arr.pop() % arr.length; //avoid unnecessary repetitions

    for (let i = 0; i < amount; i++) {
        let lastElem = arr[arr.length-1];
        arr.unshift(lastElem);
        arr.pop();
    }

    console.log(arr.join(' '));
}

//solve(['1','2','3','4','2']);
//solve(['Banana','Orange','Coconut','Apple','15']);