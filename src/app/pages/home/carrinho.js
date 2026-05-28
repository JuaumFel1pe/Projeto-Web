document.addEventListener('DOMContentLoaded', () => {
    // Busca o item que foi guardado no localStorage lá na página de produtos
    const dadosDados = localStorage.getItem('ingressoSelecionado');
    
    const checkoutNome = document.getElementById('checkout-nome');
    const checkoutPreco = document.getElementById('checkout-preco');
    const btnFinalizar = document.getElementById('btn-finalizar');
    const container = document.getElementById('container-carrinho-vazio');

    if (dadosDados) {
        // Converte o texto de volta para um objeto Javascript
        const ingresso = JSON.parse(dadosDados);

        // Altera os textos do HTML com as informações do ingresso comprado
        checkoutNome.textContent = ingresso.nome;
        checkoutPreco.textContent = `R$ ${ingresso.preco.toFixed(2).replace('.', ',')}`;
    } else {
        // Caso a pessoa entre direto na página sem clicar em comprar nada
        container.innerHTML = `
            <div class="card-prod">
                <h3 class="titulo-card-prod">Seu carrinho está vazio!</h3>
                <button class="btn-comprar-prod" onclick="window.location.href='produto.html'">Ver Ingressos</button>
            </div>
        `;
    }

    // Ação do botão Confirmar Compra (CORRIGIDO)
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', () => {
            // Abre o popup (alert) na tela
            alert('Compra realizada com sucesso!\nObrigado por escolher a Galarraga Eventos.');
            
            // Limpa o carrinho do navegador para não ficar acumulado
            localStorage.removeItem('ingressoSelecionado');
            
            // Redireciona de volta para a tela principal (home.html)
            window.location.href = 'home.html';
        });
    }
});