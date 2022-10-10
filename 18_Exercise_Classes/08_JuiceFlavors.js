function juiceFlavors(arr) {
    let juices = new Map();

    arr.forEach(el => {
        const tokens = el.split(' => ');
        const juiceType = tokens[0];
        const juiceQuantity = Number(tokens[1]);

        if (!juices.has(juiceType)) {
            juices.set(juiceType, juiceQuantity);
        } else {
            const newQuantity = juices.get(juiceType) + juiceQuantity;
            juices.set(juiceType, newQuantity);
        }
    });

    for (const juice of juices.keys()) {
        let quantity = juices.get(juice);
        if (quantity >= 1000) {
            quantity /= 1000;
            quantity = Math.floor(quantity);
            console.log(juice + ' => ' + quantity);
        }
    }
}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);

console.log('---------------------------');

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);