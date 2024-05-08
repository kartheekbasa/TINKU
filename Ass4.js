function findFactors(number) {
    const factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
const number = 12;
console.log("Factors of " + number + " are: " + findFactors(number));