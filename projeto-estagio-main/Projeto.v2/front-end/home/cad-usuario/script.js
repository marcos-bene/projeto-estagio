const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const signupLink = document.getElementById('signup-link');
const backButton = document.getElementById('back-button');
const users = [];

signupLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'http://localhost/projeto-estagio-main/Projeto.v2/front-end/home/menu.html';
});

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newEmail = document.getElementById('new-email').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }

    const userExists = users.some((u) => u.username === newUsername);

    if (userExists) {
        alert('Este usuário já está cadastrado. Escolha outro nome de usuário.');
        return;
    }

    users.push({ username: newUsername, email: newEmail, password: newPassword });

    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');

    document.getElementById('new-username').value = '';
    document.getElementById('new-email').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
});

backButton.addEventListener('click', function () {
    window.location.href = 'http://localhost/projeto-estagio-main/Projeto.v2/front-end/home/menu.html'; 
});