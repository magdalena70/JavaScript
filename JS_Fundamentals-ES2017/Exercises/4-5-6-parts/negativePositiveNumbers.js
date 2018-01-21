function solve(arr){
    let negative = [],
        positive = [],
        newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){           
            negative.unshift(arr[i]); // add to the beginning
        }else{            
            positive.push(arr[i]); // add to the end
        }
    }   

    newArray = negative.concat(positive);
    for (let num of newArray) {
      console.log(num);
    } 
}

solve([3, -2, 0, -1]);
solve([7, -2, 8, 9]);