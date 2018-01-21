function solve(arr) {
    let resultArr = getResult(arr);
    printResult(resultArr);

    function getResult(arr) {
        let result = [];
        for (let index = 0; index < arr.length; index++) {
            let element = arr[index];
            if (element === 'add') {
                result.push(index + 1);
            }

            if (element === 'remove') {
                result.pop();
            }
        }

        return result;
    }

    function printResult(resultArr) {
        if (resultArr.length > 0) {
            resultArr.forEach(function (el) {
                console.log(el);
            }, this);
        } else {
            console.log('Empty');
        }
    }
}

//solve(['add','add','add']);
//solve(['add', 'add', 'remove', 'add', 'add']);
//solve(['remove', 'remove', 'remove']);