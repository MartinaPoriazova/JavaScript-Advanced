function sum(array) {
    if (!Array.isArray(array)) {
        return NaN;
    }
    
    let result = 0;

    for (let number of array) {
        result += Number(number);
    }

    return result;
}

function product(array) {
    let result = 1;

    for (let number of array) {
        result *= Number(number);
    }

    return result;
}

module.exports = { sum, product };