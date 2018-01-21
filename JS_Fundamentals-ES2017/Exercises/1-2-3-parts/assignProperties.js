function solve(arr){
    let obj = {},
    prop1 = arr[0],
    prop2 = arr[2],
    prop3 = arr[4];
    obj[prop1] = arr[1];
    obj[prop2] = arr[3];
    obj[prop3] = arr[5];
    
    console.log(obj);
}

solve(['name', 'Pesho', 'age', '23', 'gender', 'male']);