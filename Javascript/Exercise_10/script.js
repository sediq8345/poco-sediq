const regex = /^(\d{3})?[\s.-]\d{3}[\s.-]\d{4}$/;

const inputField = document.getElementById("input-field");

function validate() {
    if(!regex.test(inputField.value)) {
        alert("The phone is not valid");
    }
    else {
        alert("Its valid");
    }
}