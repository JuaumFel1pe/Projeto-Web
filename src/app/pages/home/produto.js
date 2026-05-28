document.addEventListener('DOMContentLoaded', () => {
    const botoesComprar = document.querySelectorAll('.btn-comprar-prod');
    
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', (event) => {
            const card = event.target.closest('.card-prod');
            const nomeProduto = card.querySelector('.titulo-card-prod').textContent;
            const precoProduto = card.getAttribute('data-preco');

            const ingresso = {
                nome: nomeProduto,
                preco: parseFloat(precoProduto)
            };

            localStorage.setItem('ingressoSelecionado', JSON.stringify(ingresso));

            
            window.location.href = 'carrinho.html';
        });
    });
});