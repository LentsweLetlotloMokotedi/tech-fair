// DOM elements
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Event listeners for showing/hiding login and register forms
registerLink.addEventListener('click', () => {
    // Show the registration form
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    // Show the login form
    wrapper.classList.remove('active');
});

// Event listeners for showing/hiding popup
btnPopup.addEventListener('click', () => {
    // Show the popup
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    // Hide the popup
    wrapper.classList.remove('active-popup');
});

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.querySelector('#login-form input[type="email"]').value;
    var password = document.querySelector('#login-form input[type="password"]').value;

    // Perform authentication request (simulate server-side check)
    if (username === 'bclpay@gmail.com' && password === 'password') {
        alert('Login successful!');
        // Redirect to a new page or perform further actions
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password.');
    }

    // Clear form inputs
    document.querySelector('#login-form input[type="email"]').value = '';
    document.querySelector('#login-form input[type="password"]').value = '';
});

// Sign-up Form Submission
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var newUsername = document.querySelector('#register-form input[type="text"]').value;
    var newPassword = document.querySelector('#register-form input[type="password"]').value;

    window.location.href = 'index.html';
    alert('Sign-up successful!');

    // Clear form inputs
    document.querySelector('#register-form input[type="text"]').value = '';
    document.querySelector('#register-form input[type="email"]').value = '';
    document.querySelector('#register-form input[type="password"]').value = '';
});
