document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Dummy credentials
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        alert("Login berhasil!");
        errorMessage.textContent = "";
        // Redirect or proceed to the next page
    } else {
        errorMessage.textContent = "Username atau password salah.";
    }
});
