function sortBy2Criteria(arr) {
    // let sortedArr = arr.sort((a,b) => {
    //     if(a.length !== b.length) {
    //         return a.length - b.length;
    //     } else {
    //         return a.localeCompare(b);
    //     }
    // });
    // console.log(sortedArr.join("\n"));

    return arr.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b);
    }).join("\n");
}

console.log(sortBy2Criteria(['alpha', 
'beta', 
'gamma']
));

console.log("----------------------")

console.log(sortBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));