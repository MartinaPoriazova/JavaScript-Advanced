function sum(arr) {
    let firstElement = arr.shift();
    let secondElement = arr.pop();

    console.log(Number(firstElement) + Number(secondElement));
}

sum(['20', '30', '40']);