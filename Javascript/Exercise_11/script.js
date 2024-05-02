const firstInteger = parseInt(prompt("Enter your number: "));
const secondInteger = parseInt(prompt("Enter your number: "));

if (isNaN(firstInteger) || isNaN(secondInteger)) {
    alert("Invalid input");
} else if (firstInteger > secondInteger) {
    alert(firstInteger + " is bigger than " + secondInteger);
} else {
    alert(secondInteger + " is bigger than " + firstInteger);
}
