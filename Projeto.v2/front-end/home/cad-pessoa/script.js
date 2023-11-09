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
    window.location.href = '/Users/Bene/Downloads/Projeto.v2/front-end/home/menu.html'; // Redireciona o usuário para a tela de menu
});

form.addEventListener('submit', function (event) {
    const dataNascimento = dataNascimentoInput.value;
    const cpfCnpj = cpfCnpjInput.value;

    // Expressão regular para validar a data de nascimento no formato "dd/mm/aaaa"
    const dataNascimentoRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!dataNascimentoRegex.test(dataNascimento)) {
        event.preventDefault(); // Impede o envio do formulário
        alert('Data de Nascimento inválida. Use o formato dd/mm/aaaa.');
        return;
    }

    // Expressão regular para validar CPF ou CNPJ
    const cpfCnpjRegex = /^(\d{3}\.\d{3}\.\d{3}-\d{2})|(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/;

    if (!cpfCnpjRegex.test(cpfCnpj)) {
        event.preventDefault(); // Impede o envio do formulário
        alert('CPF/CNPJ inválido. Use o formato xxx.xxx.xxx-xx ou xx.xxx.xxx/xxxx-xx.');
        return;
    }
});

