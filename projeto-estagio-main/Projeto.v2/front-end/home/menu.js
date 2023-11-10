const menuItems = document.querySelectorAll('.menu-container ul li a');
const backButton = document.getElementById('back-button');

menuItems.forEach(item => {
    item.addEventListener('mouseover', function () {
        item.classList.add('hovered');
    });

    item.addEventListener('mouseout', function () {
        item.classList.remove('hovered');
    });
});

backButton.addEventListener('click', function () {
    window.location.href = 'http://localhost/projeto-estagio-main/Projeto.v2/front-end/login/index.html';
});