document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    // Function to disable click events for protected paths
    function disableClickEvents() {
        const protectedPaths = ['/services', '/gallery', '/about', '/contact'];
        protectedPaths.forEach(path => {
            const link = document.querySelector(`a[href="${path}"]`);
            if (link) {
                link.onclick = function(event) {
                    if (!isLoggedIn) {
                        event.preventDefault(); // Prevent default action (e.g., following a link)
                        window.location.href = '/login.html'; // Redirect to login page
                    }
                };
            }
        });
    }

    disableClickEvents();

    const logOut = document.querySelector('.logout');

    // Event listener for logout button
    logOut.onclick = () => {
        sessionStorage.clear(); // Clear session storage
        window.location.href = '/login.html'; // Redirect to login page
    };

});
