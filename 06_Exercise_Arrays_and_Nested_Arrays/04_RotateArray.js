function rotation(arr, steps) {
    let result = arr;
   
    for (let step = 1; step <= steps; step++) {
        result.unshift(result[result.length - 1]);
        result.pop();
    }
    console.log(result.join(" "));
}

rotation(['1', 
'2', 
'3', 
'4'], 
2
);

rotation(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);
