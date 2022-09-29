// let myVar = 100; // => global let

// function declaration() {

//     function innerDeclaration() {

//         function ultraNestedDeclaration() {
//             // let myVar = 200; => only for the ultraNestedDeclaration

//             console.log(myVar);
//         }
//     }
// }

// declaration();


// // hoisting / raising

// let myFunc = function myFunc() {
//     console.log("myFunc")
// }

// myFunc();


function first() {
    return second();

    function second() {
        return third();

        function third() {
            return 100;
        }
    }
}

let result = first();
console.log(result);