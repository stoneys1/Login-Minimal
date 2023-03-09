const logregBox = document.querySelector('logreg-box');
const loginLink = document.querySelector('login-link')

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
})