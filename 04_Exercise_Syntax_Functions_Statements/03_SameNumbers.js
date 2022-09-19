function sameNumber(num) {
    let numAsString = num.toString();
    let firstDigit = numAsString[0];
    let isSame = true;
    let sum = 0;

    for (let i = 1; i < numAsString.length; i++) {
        if(numAsString[i] !== firstDigit) {
            isSame = false;
        }

        sum += Number(numAsString[i]);
    }

    console.log(isSame);
    console.log(sum)
}

sameNumber(2222222);
sameNumber(1234);