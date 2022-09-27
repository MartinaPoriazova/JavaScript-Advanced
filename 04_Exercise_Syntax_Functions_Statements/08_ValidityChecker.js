function validityChecker(x1, y1, x2, y2) {
 
    function ccs(x1, y1, x2, y2) {
        let x = x1 - x2;
        let y = y1 - y2;
        return Math.sqrt(x * x + y * y);
    };
 
    if(Number.isInteger(ccs(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    };
 
    if (Number.isInteger(ccs(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(ccs(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    };
};