document.addEventListener('DOMContentLoaded', () => {
    const inputPesquisa = document.querySelector('.barra-pesquisa input');
    const iconeLupa = document.getElementById('lupa');

    function realizarPesquisa() {
        const termo = inputPesquisa.value.trim();
        if (termo !== "") {
            console.log('Pesquisando por:', termo);
        }
    }

    iconeLupa.addEventListener('click', realizarPesquisa);

    inputPesquisa.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            realizarPesquisa();
        }
    });
});