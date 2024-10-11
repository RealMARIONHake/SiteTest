document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin123") {
        alert('Admin login successful!');
        window.location.href = 'admin.html';
    } else if (username && password) {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Login failed. Check your credentials.');
    }
});
