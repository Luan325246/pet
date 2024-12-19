// Seleciona o formulário e a tabela
const form = document.getElementById('agendamentoForm');
const tabela = document.querySelector('#listaAgendamentos tbody');

// Adiciona um evento ao formulário para capturar os dados
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos do formulário
    const nomePet = document.getElementById('nomePet').value;
    const raca = document.getElementById('raca').value;
    const donoPet = document.getElementById('donoPet').value;
    const telefone = document.getElementById('telefone').value;

    // Adiciona uma nova linha na tabela
    const linha = tabela.insertRow();
    const id = tabela.rows.length; // ID baseado na quantidade de linhas
    linha.innerHTML = `
        <td>${id}</td>
        <td>${nomePet}</td>
        <td>${raca}</td>
        <td>${donoPet}</td>
        <td>${telefone}</td>
        <td><button onclick="removerLinha(this)">Remover</button></td>
    `;

    // Limpa os campos do formulário
    form.reset();
});

// Função para remover uma linha da tabela
function removerLinha(botao) {
    const linha = botao.parentNode.parentNode;
    linha.remove();

    // Atualiza os IDs após a remoção
    atualizarIDs();
}

// Atualiza os IDs da tabela
function atualizarIDs() {
    const linhas = tabela.rows;
    for (let i = 0; i < linhas.length; i++) {
        linhas[i].cells[0].textContent = i + 1;
    }
}