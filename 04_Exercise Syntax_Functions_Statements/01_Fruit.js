function fruit(type, weight, price) {
    let weightInKilos = weight / 1000;
    let result = weightInKilos * price;
    console.log(`I need $${result.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);