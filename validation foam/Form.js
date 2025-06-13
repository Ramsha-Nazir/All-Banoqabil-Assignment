document.getElementById("registration_form").addEventListener("submit", function(e) {
e.preventDefault();

const Username = document.getElementById("Username").value.trim();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirm_password = document.getElementById("confirm_password").value;
const error = document.getElementById("error");

const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!~@#$%^&*]).{8,}$/;

if (Username.length < 3) {
    error.textContent = ("username should be LONG 3 characters")
    return;
} else if (!passwordregex.test(password)) {
    error.textContent = ("Password must include uppercase, lowercase, number, special character")
    return;
} else if (!email.includes("@")) {
    error.textContent = ("invalid email")
    return;
} else if (password !== confirm_password) {
    error.textContent = ("password do not match")
    return;
} else {
    error.textContent = " "
}

alert("form submitted")