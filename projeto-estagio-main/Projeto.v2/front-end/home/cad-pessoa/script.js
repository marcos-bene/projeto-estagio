const cadPessoaItems = document.querySelectorAll('.cadastro-pessoa ul li a');
const backButton = document.getElementById('back-button');
const form = document.getElementById('cadastro_pessoa_form');
const dataNascimentoInput = document.getElementById('data-nascimento');
const cpfCnpjInput = document.getElementById('cpf-cnpj');


cadPessoaItems.forEach(item => {
    item.addEventListener('mouseover', function () {
        item.classList.add('hovered');
    });

    item.addEventListener('mouseout', function () {
        item.classList.remove('hovered');
    });
});

backButton.addEventListener('click', function () {
    window.location.href = 'http://localhost/projeto-estagio-main/Projeto.v2/front-end/home/menu.html'; // Redireciona o usuário para a tela de menu
});

form.addEventListener('submit', function (event) {
    const dataNascimento = dataNascimentoInput.value;
    const cpfCnpj = cpfCnpjInput.value;

    const dataNascimentoRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!dataNascimentoRegex.test(dataNascimento)) {
        event.preventDefault(); 
        alert('Data de Nascimento inválida. Use o formato dd/mm/aaaa.');
        return;
    }

    const cpfCnpjRegex = /^(\d{3}\.\d{3}\.\d{3}-\d{2})|(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/;

    if (!cpfCnpjRegex.test(cpfCnpj)) {
        event.preventDefault();
        alert('CPF/CNPJ inválido. Use o formato xxx.xxx.xxx-xx ou xx.xxx.xxx/xxxx-xx.');
        return;
    }
});

