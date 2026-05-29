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

    // Pega o usuário logado no localStorage
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  const botaoLogin = document.getElementById("botao-login");
  const botaoUsuario = document.getElementById("botao-usuario");

  if (usuarioLogado) {
    // Esconde o botão de Login
    if (botaoLogin) botaoLogin.style.display = "none";

    // Mostra o botão único com o email do usuário
    if (botaoUsuario) {
      botaoUsuario.style.display = "flex";
      
      // Insere o ícone de usuário e o email no botão
      botaoUsuario.innerHTML = `<i class="fas fa-user" style="margin-right: 8px;"></i> ${usuarioLogado.email}`;

      // Configura o evento de clique para fazer o Logout
      botaoUsuario.addEventListener("click", (e) => {
        e.preventDefault(); 
        
        // Confirmação simples para evitar cliques acidentais
        if(confirm("Deseja realmente sair da sua conta?")) {
            localStorage.removeItem("usuarioLogado");
            alert("Você saiu da conta!");
            window.location.reload(); // Recarrega a página para voltar ao estado deslogado
        }
      });
    }
  }
});