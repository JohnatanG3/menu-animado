// Seleciona os elementos do DOM necessários
const botao = document.querySelector('.botao-menu');
const menuLateral = document.querySelector('.menu-lateral');
const conteudo = document.querySelector('.conteudo');
const background = document.querySelector('.background');

// Evento de clique no botão para abrir/fechar o menu
botao.addEventListener('click', () => {
    // Alterna as classes "ativo" para ativar/desativar o menu e os efeitos
    menuLateral.classList.toggle('ativo');
    botao.classList.toggle('ativo');
    conteudo.classList.toggle('ativo');
    background.classList.toggle('ativo');
    // Muda a cor de fundo do corpo dependendo do estado do menu
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1';
});

// Fecha o menu ao clicar no fundo escuro
background.addEventListener('click', () => {
    // Remove a classe "ativo" de todos os elementos para fechar o menu
    menuLateral.classList.remove('ativo');
    botao.classList.remove('ativo');
    conteudo.classList.remove('ativo');
    background.classList.remove('ativo');
    document.body.style.backgroundColor = "#ecf0f1";
});