let birthDate = prompt("Enter your date of birth in YYYY/MM/DD format");
let currentDate = new Date();

const dateFormatRegex = /^\d{4}\/(0[1-9]|1[0-2])\/((0[1-9]|[12]\d)|30|31)$/;

function isValidDate(dateString) {
    let parts = dateString.split("/");
    let year = parseInt(parts[0]);
    let month = parseInt(parts[1]);
    let day = parseInt(parts[2]);

    // Check for valid days in each month
    var validDays = {
        1: 31,  // January
        2: (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28, // February (considering leap years)
        3: 31,  // March
        4: 30,  // April
        5: 31,  // May
        6: 30,  // June
        7: 31,  // July
        8: 31,  // August
        9: 30,  // September
        10: 31, // October
        11: 30, // November
        12: 31  // December
    };

    // Check if the day is valid for the given month
    if (day > validDays[month]) {
        return false;
    }

    return true;
}

let dateObj = new Date(birthDate);

if (!dateFormatRegex.test(birthDate)) {
    alert("Invalid date format. Please enter the date in YYYY/MM/DD format.");
} 

else if (dateObj > currentDate) {
    alert("The date is in the future!")

}

else if (isValidDate(birthDate)) {
        

        let ageDifferenceMs = currentDate - dateObj;

        // Convert milliseconds to years (approximately)
        let result = Math.floor(ageDifferenceMs / (1000 * 60 * 60 * 24 * 365.25));

        alert("Your age is " + result + " years.");
    } 
    
    else {
        alert("Invalid date. Please enter a valid date.");
    }

let material = [1,2,3];

    for (const value of material){
        
    }