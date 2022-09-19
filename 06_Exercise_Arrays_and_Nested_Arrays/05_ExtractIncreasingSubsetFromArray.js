function solve(arr) {
    let result = [];
    let biggestOne = arr[0];
    result = arr.reduce((acc, currentElement) => {
        if(biggestOne <= currentElement) {
            acc.push(currentElement);
            biggestOne = currentElement;
        }
        return acc;
    }, [])
    // result.push(biggestOne);



    // arr.forEach(element => {
    //     if(element >= biggestOne) {
    //         result.push(element);
    //         biggestOne = element;
    //     }
    // });
    return result;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );

    console.log("--------------");

    solve([1, 
        2, 
        3,
        4]
        );