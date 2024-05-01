document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Function to disable click events for protected paths
    function disableClickEvents() {
        const protectedPaths = ['/services', '/gallery', '/about', '/contact'];
        protectedPaths.forEach(path => {
            const link = document.querySelector(`a[href="${path}"]`);
            if (link) {
                link.onclick = function(event) {
                    if (!isLoggedIn) {
                        event.preventDefault(); // Prevent default action (e.g., following a link)
                        window.location.href = 'login.html'; // Redirect to login page
                    }
                };
            }
        });
    }

    // Disable click events for protected paths if not logged in
    if (!isLoggedIn) {
        disableClickEvents();
    }

    // Event listener for logout button
    const logOut = document.querySelector('.logout');
    if (logOut) {
        logOut.onclick = () => {
            localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn from localStorage
            window.location.href = 'login.html'; // Redirect to login page
        };
    }

    // Login form submission handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Perform actual authentication here...
            // For simplicity, let's assume the user is authenticated successfully
            localStorage.setItem('isLoggedIn', 'true');

            // Redirect to index page after successful login
            window.location.href = 'index.html';
        });
    }

    // Register form submission handling
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Perform actual registration process here...
            // For simplicity, let's assume the user is registered successfully and logged in
            localStorage.setItem('isLoggedIn', 'true');

            // Redirect to index page after successful registration
            window.location.href = 'index.html';
        });
    }
});
