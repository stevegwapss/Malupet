// form loading animation
const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i * 100);
});

// form validation and submission
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email.value === storedEmail && password.value === storedPassword) {
        // Login successful
        alertBox('Login successful');
        // Redirect or perform other actions here
    } else {
        // Login failed
        alertBox('Invalid email or password');
    }
});

const alertBox = (message) => {
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');
    alertMsg.innerHTML = message;

    alertContainer.style.top = `5%`;
    setTimeout(() => {
        alertContainer.style.top = null;
    }, 5000);
};
