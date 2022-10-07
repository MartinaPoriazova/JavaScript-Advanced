class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let rectangleOne = new Rectangle(4,5, "red");
let rectangleTwo = new Rectangle(10, 20, "blue");

console.log(rectangleOne.calcArea());
console.log(rectangleTwo.calcArea());