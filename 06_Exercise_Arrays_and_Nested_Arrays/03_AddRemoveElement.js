function addRemoveElement(arrOfCommands) {
    let result = [];
    let num = 1;

    for (let command of arrOfCommands) {
        switch(command) {
            case "add":
                result.push(num);
                num++;
                break;
            case "remove":
                result.pop();
                num++;
                break;
        }
    }
    if (result.length == 0) {
        console.log("Empty")
    } else {
        console.log(result.join("\n"));
    }
}

addRemoveElement(['add', 
'add', 
'add', 
'add']);

console.log("----------------------")

addRemoveElement(['add', 
'add', 
'remove', 
'add', 
'add']
);