for (let i = 0; i < 20; i++) {
    let number = parseInt(prompt("Enter a number to check if its even or odd:"));

    if (isNaN(number)) {
        alert("Invalid input! Please enter a valid number.");
        break;
    }

    if (number % 2 === 0) {
        alert(number + " is even");
    } else {
        alert(number + " is odd");
    }
}