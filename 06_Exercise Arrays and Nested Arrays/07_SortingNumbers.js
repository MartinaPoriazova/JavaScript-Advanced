function sortingNumbers(input) {
    let array = input.sort((a, b) => a - b);
    let arrayCopy = array.slice(0);
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
        result.push(arrayCopy[0]);
        if (result.length === array.length) {
            break;
        }
      
        result.push(arrayCopy[arrayCopy.length - 1]);
        if (result.length === array.length) {
            break;
        }
        arrayCopy.shift();
        arrayCopy.pop();
    }
   
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]));