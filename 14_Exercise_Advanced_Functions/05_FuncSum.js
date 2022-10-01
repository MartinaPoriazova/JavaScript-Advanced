function add(num) {

    function sum(a) {
        num += a;
        return sum;
    }

    sum.toString = function () {
        return num.toString();
    }

    return sum;
}

console.log(add(1)(6)(-3).toString());
console.log(add(1).toString()); 