(function arrayExtension() {
    let myArr = [1,2,3,4,5,6,7,8,9];
    let anotherArr = [99, 87, 66];

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        return this.slice(n);
    }

    Array.prototype.take = function(n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function () {
        return this.reduce((prevValue, nextValue) => prevValue + nextValue);
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }

    // console.log(myArr.last());
    // console.log(myArr.skip(3));
    // console.log(myArr.take(3));
    // console.log(myArr.sum());
    // console.log(myArr.average());

    // console.log(anotherArr.sum());
})()

// arrayExtension();