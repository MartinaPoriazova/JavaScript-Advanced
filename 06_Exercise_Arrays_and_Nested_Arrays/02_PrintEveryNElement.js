function printEveryNElement(arr, step) {
    let result = [];
    for (let i = 0; i < arr.length; i+= step) {
        result.push(arr[i]);
    }
    return result;

    // return arr.filter((element, i) => {
    //     if(i % step == 0) {
    //         return element;
    //     }
    // });
}

console.log(printEveryNElement(['5', '20', '31', '4', '20'], 2));
console.log("----------------------");

console.log(printEveryNElement(['1', '2','3', '4','5'], 6));