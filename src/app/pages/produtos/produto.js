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

            // 1. Busca o carrinho atual no localStorage ou cria um array vazio se não existir
            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

            // 2. Adiciona o novo ingresso à lista
            carrinho.push(ingresso);

            // 3. Salva a lista atualizada no localStorage
            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            // Redireciona para o carrinho
            window.location.href = '../carrinho/carrinho.html';
        });
    });
});