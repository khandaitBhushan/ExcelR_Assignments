const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    if(validateEmail() && validatePassword()){

        const enteredEmail = document.getElementById("email").value;
        const enteredPassword = document.getElementById("password").value;

        const user = JSON.parse(localStorage.getItem("user"));

        if(user == null){
            alert("No account found. Please Sign Up.");
            return;
        }

        if(enteredEmail === user.email && enteredPassword === user.password){

            alert("Login Successful");

            // redirect
            window.location.href="home.html";

        }else{

            alert("Invalid Email or Password");

        }

    }

});


function validateEmail(){

    let email=document.getElementById("email").value;
    let error=document.getElementById("emailError");

    if(email==""){
        error.innerHTML="Email is required";
        return false;
    }

    let pattern=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if(!pattern.test(email)){
        error.innerHTML="Enter valid email";
        return false;
    }

    error.innerHTML="";
    return true;

}


function validatePassword(){

    let password=document.getElementById("password").value;
    let error=document.getElementById("passError");

    if(password==""){
        error.innerHTML="Password is required";
        return false;
    }

    if(password.length<8){
        error.innerHTML="Password must be at least 8 characters";
        return false;
    }

    error.innerHTML="";
    return true;

}