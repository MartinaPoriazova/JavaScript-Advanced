function argInfo(...params) {
    let result = {};

    for (let el of params) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }

        result[type] += 1;
    }

    for (let [k,v] of Object.entries(result)) {
        console.log(`${k} = ${v}`);
    }

}

argInfo('cat', 42, function () { console.log('Hello world!'); })