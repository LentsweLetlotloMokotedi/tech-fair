// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform authentication request (simulate server-side check)
    // Replace this with your server-side code or API call
    if (username === 'demo' && password === 'password') {
      alert('Login successful!');
      // Redirect to a new page or perform further actions
      window.location.href = 'dashboard.html'; // Replace 'dashboard.html' with your desired next page
    } else {
      alert('Invalid username or password.');
    }
  
    // Clear form inputs
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  });
  
  // Sign-up Form Submission
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var newUsername = document.getElementById('name').value;
    var newPassword = document.getElementById('password').value;
  
    // Perform sign-up request (simulate server-side registration)
    // Replace this with your server-side code or API call
    // You would typically store the new user in a database
    alert('Sign-up successful!');
    // Redirect to a new page or perform further actions
    window.location.href = 'index.html'; // Replace 'dashboard.html' with your desired next page
  
    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('password').value = '';
  });
  