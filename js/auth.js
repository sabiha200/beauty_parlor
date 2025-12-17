// Register User
function registerUser(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful!");
    window.location.href = "login.html";
}

// Login User
function loginUser(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user found. Please sign up.");
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}
