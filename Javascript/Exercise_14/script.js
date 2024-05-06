const currentAge = parseInt(prompt("Enter your current age: "));
const retirementAge = parseInt(prompt("Enter your maximum age: "));

function retirementCalculator(currentAge, retirementAge) {
    let yearsLeft = retirementAge - currentAge;
    let retirementYear = new Date().getFullYear() + yearsLeft;
    return "You have " + yearsLeft + " years left until you can retire. It's " + new Date().getFullYear() + ", so you can retire in " + retirementYear + ".";
}

alert(retirementCalculator(currentAge, retirementAge));