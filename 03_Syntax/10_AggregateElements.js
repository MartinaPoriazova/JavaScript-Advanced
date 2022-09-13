function solve(array) {
    let sum1 = 0;
    let sum2 = 0;
    let concat = '';

    for (let i = 0; i < array.length; i++) {
        sum1 += array[i];
        sum2 += 1 / array[i];
        concat += array[i];
    }

    console.log(sum1);
    console.log(sum2);
    console.log(concat);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);