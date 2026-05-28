const navButtons = document.getElementById("nav-buttons");

const usuarioLogado = localStorage.getItem("usuarioLogado");

/* VERIFICA LOGIN */

if (usuarioLogado) {
  navButtons.innerHTML = `

<div class="perfil">

  <img src="https://icones.pro/wp-content/uploads/2021/02/symbole-masculin-icone-l-utilisateur-violet.png" class="foto-perfil">

  <span class = "nome-usuario">${usuarioLogado}</span>

  <button onclick="logout()" class="btn-nav">
    Sair
  </button>

</div>

`;
}

/* LOGOUT */

function logout() {
  localStorage.removeItem("usuarioLogado");

  window.location.reload();
}
