function pieceOfPie(pies, firstPie, secondPie) {
    return pies.slice(pies.indexOf(firstPie), pies.indexOf(secondPie) + 1);
}


console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));

console.log(
    pieceOfPie(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
        'Pot Pie',
        'Smoked Fish Pie'
    ));