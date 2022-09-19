// => only for even elements count

function sortingNumbers(arr) {
    let arrAsc = arr.sort((a, b) => a - b);
    // console.log(arrAsc)
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(arrAsc[i] != arrAsc.length - 1) {
            result.push(arrAsc[i]);
            result.push(arrAsc[arrAsc.length - 1]);
            arrAsc.pop();
        } else {
            result.push(arrAsc[i]);
        }   
    }

    return result;
}

// function sortingNumbers(input){
//     let result = [];
//     array = input.sort((a, b) => a - b);
//     // console.log(array);

//     while(array.length !== 0){
//     result.push(array[0]) && array.shift();
//       result.push(array[array.length-1]) && array.pop();
//     }
//     return result;
//  }

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

