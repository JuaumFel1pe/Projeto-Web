document.addEventListener('DOMContentLoaded', () => {
    
    const dadosDados = localStorage.getItem('ingressoSelecionado');
    
    const checkoutNome = document.getElementById('checkout-nome');
    const checkoutPreco = document.getElementById('checkout-preco');
    const btnFinalizar = document.getElementById('btn-finalizar');
    const container = document.getElementById('container-carrinho-vazio');

    if (dadosDados) {
        
        const ingresso = JSON.parse(dadosDados);

        
        checkoutNome.textContent = ingresso.nome;
        checkoutPreco.textContent = `R$ ${ingresso.preco.toFixed(2).replace('.', ',')}`;
    } else {
        
        container.innerHTML = `
            <div class="card-prod">
                <h3 class="titulo-card-prod">Seu carrinho está vazio!</h3>
                <button class="btn-comprar-prod" onclick="window.location.href='produto.html'">Ver Ingressos</button>
            </div>
        `;
    }

   
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', () => {
           
            alert('Compra realizada com sucesso!\nObrigado por escolher a Galarraga Eventos.');
            
            
            localStorage.removeItem('ingressoSelecionado');
            
            
            window.location.href = 'home.html';
        });
    }
});