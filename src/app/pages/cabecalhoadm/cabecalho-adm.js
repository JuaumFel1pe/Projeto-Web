document.addEventListener('DOMContentLoaded', () => {
    const inputPesquisa = document.querySelector('.barra-pesquisa input');
    const iconeLupa = document.getElementById('lupa');
    const botaoSair = document.getElementById('botao-sair');

    function executarBusca() {
        const valor = inputPesquisa.value.trim();
        if (valor) {
            console.log("Buscando por:", valor);
        }
    }

    iconeLupa.addEventListener('click', executarBusca);
    
    inputPesquisa.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            executarBusca();
        }
    });

    botaoSair.addEventListener('click', (e) => {
        console.log("Admin fez logout.");
    });
});