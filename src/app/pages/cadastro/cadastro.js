document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById('form-cadastro');

    if (formCadastro) {
        formCadastro.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede a página de recarregar

            const email = document.getElementById('cad-email').value;
            const senha = document.getElementById('cad-senha').value;

            if (email && senha.length >= 4) {
                // Salva as credenciais no localStorage para o Login consultar depois
                localStorage.setItem('emailCadastrado', email);
                localStorage.setItem('senhaCadastrada', senha);

                alert('Cadastro realizado com sucesso! Agora você será redirecionado para a tela de login.');
                
                // Manda o usuário para a página de login
                window.location.href = '../login/login.html';
            } else {
                alert('A senha precisa ter pelo menos 4 caracteres.');
            }
        });
    }
});