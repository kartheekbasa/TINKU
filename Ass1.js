let number = parseFloat(prompt("Enter a number:"));
if (!isNaN(number)) {
    let squareRoot = Math.sqrt(number);
    console.log("The square root of", number, "is", squareRoot);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
