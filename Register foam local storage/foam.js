document.getElementById("registration_form").addEventListener("submit", function(e) {
    e.preventDefault();

    const Username = document.getElementById("Username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const error = document.getElementById("error");

    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!~@#$%^&*]).{8,}$/;

    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    
    if (Username.length < 3) {
        error.textContent = "Username should be at least 3 characters";
        return;
    }

    if (!passwordregex.test(password)) {
        error.textContent = "Password must include uppercase, lowercase, number, and special character";
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "Invalid email";
        return;
    }

    if (password !== confirm_password) {
        error.textContent = "Passwords do not match";
        return;
    }

    
    const userExists = users.some(user => user.username === Username || user.email === email);
    if (userExists) {
        error.textContent = "Username or Email already exists";
        return;
    }

    
    const newUser = {
        username: Username,
        email: email,
        password: password 
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    error.textContent = "";
    alert("Form submitted successfully!");
    document.getElementById("registration_form").reset();
});