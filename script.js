document.getElementById("loginBtn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example authentication
    if(username === "admin" && password === "12345") {
        document.getElementById("message").textContent = "Login Successful!";
        document.getElementById("message").style.color = "#00ff00";
    } else {
        document.getElementById("message").textContent = "Invalid Credentials!";
        document.getElementById("message").style.color = "#ff0000";
    }
});
