const logregbox = document.querySelector('.logregbox');
const loginLink = document.querySelector('.link-login');
const registerLink = document.querySelector('.link-register');

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    logregbox.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    logregbox.classList.remove('active');
});

loginForm.classList.add('active');
