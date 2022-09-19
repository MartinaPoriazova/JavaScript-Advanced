function evenPosition(array) {
    let result = '';

    array.forEach(element => {
        if(array.indexOf(element) % 2 === 0) {
            result += element + ' ';
        }
    });

    console.log(result.trim());
}

evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);