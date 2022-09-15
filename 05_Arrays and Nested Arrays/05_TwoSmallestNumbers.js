function solve(arr) {
    let result = [];

    arr.sort((a, b) => a - b);

    result = arr[0] + ' ' + arr[1];

    console.log(result);
}

solve([30, 15, 50, 5]);