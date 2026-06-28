const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateConfirmPassword()
    ) {

        // Store user details
        const user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration Successful!");

        form.reset();

        document.getElementById("nameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("passError").innerHTML = "";
        document.getElementById("confirmPassError").innerHTML = "";
    }
});

function validateName() {
    const name = document.getElementById("name").value.trim();
    const error = document.getElementById("nameError");

    if (name === "") {
        error.innerHTML = "Name is required";
        return false;
    }

    if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(name)) {
        error.innerHTML = "Enter full name";
        return false;
    }

    error.innerHTML = "";
    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("emailError");

    if (email === "") {
        error.innerHTML = "Email is required";
        return false;
    }

    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(email)) {
        error.innerHTML = "Invalid email";
        return false;
    }

    error.innerHTML = "";
    return true;
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const error = document.getElementById("passError");

    if (password === "") {
        error.innerHTML = "Password is required";
        return false;
    }

    const pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,30}$/;

    if (!pattern.test(password)) {
        error.innerHTML =
            "Password must contain uppercase, lowercase, number and special character";
        return false;
    }

    error.innerHTML = "";
    return true;
}

function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;
    const error = document.getElementById("confirmPassError");

    if (confirmPassword === "") {
        error.innerHTML = "Confirm password is required";
        return false;
    }

    if (password !== confirmPassword) {
        error.innerHTML = "Passwords do not match";
        return false;
    }

    error.innerHTML = "";
    return true;
}