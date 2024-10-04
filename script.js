function showForm(formId) {
    document.getElementById('login').classList.remove('active');
    document.getElementById('signup').classList.remove('active');

    if (formId === 'login') {
        document.getElementById('login').classList.add('active');
    } else {
        document.getElementById('signup').classList.add('active');
    }
}

async function signUpUser(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const response = await fetch('https://your-backend-api.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password })
    });

    if (response.ok) {
        alert("Account created successfully!");
    } else {
        alert("Error: " + response.statusText);
    }
}

async function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert("Login successful!");
    } else {
        alert("Error: " + response.statusText);
    }
}
