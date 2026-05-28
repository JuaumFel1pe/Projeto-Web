document.addEventListener('DOMContentLoaded', () => {
    // Inicia a renderização assim que a página carrega
    renderizarCarrinho();
});

// Função principal que desenha os itens na tela
function renderizarCarrinho() {
    const container = document.getElementById('container-carrinho');
    const resumo = document.getElementById('resumo-carrinho');
    const totalSpan = document.getElementById('total-carrinho');
    const btnFinalizar = document.getElementById('btn-finalizar');

    // Pega o array de ingressos salvo
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Limpa a tela antes de recriar os itens
    container.innerHTML = ''; 

    if (carrinho.length > 0) {
        resumo.style.display = 'block'; // Mostra a área de total
        let valorTotal = 0;

        // Passa por cada ingresso no carrinho
        carrinho.forEach((ingresso, index) => {
            valorTotal += ingresso.preco;

            // Cria o elemento visual de cada item
            const card = document.createElement('div');
            card.className = 'card-prod';
            // Ajustes de estilo para ficar em formato de lista (horizontal)
            card.style.flexDirection = 'row'; 
            card.style.width = '80%';
            card.style.marginBottom = '20px';
            card.style.padding = '15px 25px';

            card.innerHTML = `
                <div style="flex: 1; text-align: left;">
                    <h3 class="titulo-card-prod" style="padding: 0; text-align: left;">${ingresso.nome}</h3>
                    <p class="preco-prod" style="margin: 5px 0;">R$ ${ingresso.preco.toFixed(2).replace('.', ',')}</p>
                </div>
                <button class="btn-comprar-prod btn-remover" data-index="${index}" style="width: auto; padding: 0 20px; border-color: #ff4d4d; color: #ff4d4d;">Excluir</button>
            `;
            container.appendChild(card);
        });

        // Atualiza o texto do valor total
        totalSpan.textContent = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;

        // Adiciona a funcionalidade de excluir aos botões recém-criados
        const botoesRemover = document.querySelectorAll('.btn-remover');
        botoesRemover.forEach(botao => {
            botao.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                removerDoCarrinho(index);
            });
        });

    } else {
        // Se o carrinho estiver vazio
        resumo.style.display = 'none'; 
        container.innerHTML = `
            <div class="card-prod" style="width: 80%;">
                <h3 class="titulo-card-prod">Seu carrinho está vazio!</h3>
                <button class="btn-comprar-prod" onclick="window.location.href='../produtos/produto.html'">Ver Ingressos</button>
            </div>
        `;
    }

    // Configura o botão de finalizar compra
    if (btnFinalizar) {
        // Remove eventos antigos clonando o botão (evita múltiplos alertas)
        const novoBtnFinalizar = btnFinalizar.cloneNode(true);
        btnFinalizar.parentNode.replaceChild(novoBtnFinalizar, btnFinalizar);

        novoBtnFinalizar.addEventListener('click', () => {
            alert('Compra realizada com sucesso!\\nObrigado por escolher a Galarraga Eventos.');
            localStorage.removeItem('carrinho'); // Limpa o carrinho
            window.location.href = '../home/home.html';
        });
    }
}

// Função para remover um item específico
function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Remove 1 item a partir da posição "index"
    carrinho.splice(index, 1); 
    
    // Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Atualiza a tela imediatamente
    renderizarCarrinho(); 
}