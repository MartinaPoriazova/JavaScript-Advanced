function magicMatrix(matrix) {

    for (let row = 0; row < matrix.length - 1; row++) {
        let sumRowOne = matrix[row].reduce((acc, element) => acc + element);
        let sumRowTwo = matrix[row + 1].reduce((acc, element) => acc + element);
        let sumColOne = 0;
        let sumCOlTwo = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumColOne += matrix[row][col];
            sumCOlTwo += matrix[row + 1][col];
        }
        if(sumRowOne !== sumRowTwo || sumColOne !== sumCOlTwo) {
            return false;
        }
    }
    return true;
}

console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));

   console.log("-------------");

   console.log(magicMatrix(	[[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));