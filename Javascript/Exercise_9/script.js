let users = [
    {
        username: "Khalid",
        password: "test1234",
        email: "khalid@powercoders.org"
    },
    {
        username: "Shakir",
        password: "test12567",
        email: "shakir@powercoders.org"
    },
    {
        username: "Dominic",
        password: "test896",
        email: "dominic@powercoders.org"
    }
];

const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", gatherUserInput);

function gatherUserInput(event) {
    event.preventDefault();
    let user = document.querySelector("#user").value;
    let pwd = document.querySelector("#pwd").value;
    checkIfLoginExists(user, pwd);
}

function checkIfLoginExists(loginUser, loginPwd){
    //let userExists = false;
    //check if loginUser exists in array users
    users.forEach(function(user){
        if(user.email === loginUser){
            //userExists = true;
            //if loginUser exists, check if its password is same than loginPwd
            if(user.password === loginPwd){
                //  if password is correct, call changeViewIfLoggedIn
                changeViewIfLoggedIn();
            } else {
                //  else call showErrorMessage
                // showErrorMessage();
                console.log("Error");
            }
        } 

        else {
            console.log("Credentials not found");
        }
    });
    //only after checking ALL objects in our loop, we can decide if the user exists or not
    // !userExists same as userExists !== true or userExists === false
    // if(!userExists){
    //     //else loginUser does not exist, call showErrorMessage
    //     showErrorMessage();
    // }
}

function changeViewIfLoggedIn(){
    console.log("Logged In");
}

function showErrorMessage(){
    console.log("Login not found");
}