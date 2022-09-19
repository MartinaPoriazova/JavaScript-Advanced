function solve(input) {
    input.sort((a, b) => a - b);

    return input.slice(input.length / 2);
}

let resulut = solve([4, 7, 2, 5])
console.log(resulut);