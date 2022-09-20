function solve(arr) {
    let result = [];
    let number = [];
    let operators = [];

    let operationEnum = {
        "+": (a,b)=> a + b,
        "-": (a,b)=> a - b,
        "*": (a,b)=> a * b,
        "/": (a,b)=> a / b
    }

    for(let el of arr) {
        if(typeof{el} === "number") {
            number.push(el);
        } else {
            operators.push(el);
        }
    }

    if(operators.length < number.length - 1) {
        console.log("Error: too many operands!");
        return;
    } else if(number.length === operators.length || number.length === 0) {
        console.log("Error: not enough operands!");
        return;
    }

    for(let el of arr) {
        if(typeof(el) === "number") {
            result.push(el);
            continue;
        }
        let num1 = result.pop();
        let num2 = result.pop();
        let res = operationEnum[el](num2, num1);
        result.push(res);
    }
    console.log(result.join());
}

solve([3,
    4,
    '+']
   );

solve([5,
    3,
    4,
    '*',
    '-']
   );