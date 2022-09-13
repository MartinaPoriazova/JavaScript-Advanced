function solve(input) {
    let result;

    let inputType = typeof(input);
    
    if (inputType === 'number') {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

function solve(radius) {
    if (typeof radius === "number") {
        console.log((Math.PI * (radius ** 2)).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`)
    }
}

solve(5);
solve('name');