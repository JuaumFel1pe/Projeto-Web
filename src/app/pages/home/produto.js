document.addEventListener('DOMContentLoaded', () => {
    // Captura todos os botões de comprar da página
    const botoesComprar = document.querySelectorAll('.btn-comprar-prod');
    
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', (event) => {
            // Acha o card correspondente ao botão clicado
            const card = event.target.closest('.card-prod');
            
            // Pega os dados direto dos atributos data- do HTML
            const idProduto = card.getAttribute('data-id');
            const nomeProduto = card.querySelector('.titulo-card-prod').textContent;
            const precoProduto = card.getAttribute('data-preco');

            // Executa a ação de compra (pode ser trocado por um redirecionamento ou carrinho)
            alert(`Ingressos selecionados!\nEvento: ${nomeProduto}\nValor: R$ ${precoProduto}`);
            console.log(`Produto adicionado - ID: ${idProduto}, Preço: R$ ${precoProduto}`);
        });
    });
});