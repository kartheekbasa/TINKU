function displayMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(number + " * " + i + " = " + result);
    }
}
const number = 7;
console.log("Multiplication table of " + number + ":");
displayMultiplicationTable(number);
