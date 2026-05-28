document.addEventListener('DOMContentLoaded', () => {
    const inputPesquisa = document.querySelector('.barra-pesquisa input');
    const iconeLupa = document.getElementById('lupa');

    function realizarBusca() {
        const termo = inputPesquisa.value.trim();
        if (termo !== "") {
            console.log('Home procurando por:', termo);
        }
    }

    iconeLupa.addEventListener('click', realizarBusca);
    inputPesquisa.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') realizarBusca();
    });

    const cards = document.querySelectorAll('.card-ev');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const nomeEvento = card.querySelector('.titulo-card-ev').textContent;
            console.log('Redirecionando para o evento:', nomeEvento);
        });
    });
});