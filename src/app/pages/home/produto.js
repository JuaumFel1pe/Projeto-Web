document.addEventListener('DOMContentLoaded', () => {
    const botoesComprar = document.querySelectorAll('.btn-comprar-prod');
    
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', (event) => {
            const card = event.target.closest('.card-prod');
            const nomeProduto = card.querySelector('.titulo-card-prod').textContent;
            const precoProduto = card.getAttribute('data-preco');

            // Cria o objeto do ingresso selecionado
            const ingresso = {
                nome: nomeProduto,
                preco: parseFloat(precoProduto)
            };

            // Salva no localStorage (banco de dados do navegador)
            localStorage.setItem('ingressoSelecionado', JSON.stringify(ingresso));

            // Redireciona direto para a nova página do carrinho
            window.location.href = 'carrinho.html';
        });
    });
});