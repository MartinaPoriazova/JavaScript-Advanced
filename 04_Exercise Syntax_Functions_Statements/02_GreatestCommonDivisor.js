function greatestCommonDivisor(num1, num2) {
    let gcd = 1;
    let min = Math.min(num1, num2);

    for (let i = 2; i <= min; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
        }
    }

    console.log(gcd);
}

greatestCommonDivisor(15,5);
greatestCommonDivisor(2154, 458);

function solve(x, y) {
    while(y) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

console.log(solve(15, 5));
console.log(solve(2154, 458));