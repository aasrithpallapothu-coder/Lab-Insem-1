document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let course = document.getElementById("course").value;
    let message = document.getElementById("message");

    if (!/^[A-Za-z ]{3,}$/.test(name)) {
        message.style.color = "red";
        message.textContent = "Enter a valid name with at least 3 letters.";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.style.color = "red";
        message.textContent = "Enter a valid email address.";
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        message.style.color = "red";
        message.textContent = "Enter a valid 10-digit mobile number.";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must contain at least 6 characters.";
        return;
    }

    if (course === "") {
        message.style.color = "red";
        message.textContent = "Please select a course.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registration successful!";
});

document.getElementById("regForm").addEventListener("reset", function() {
    document.getElementById("message").textContent = "";
});