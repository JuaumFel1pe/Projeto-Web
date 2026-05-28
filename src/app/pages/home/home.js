document.addEventListener("DOMContentLoaded", () => {
  const inputPesquisa = document.querySelector(".barra-pesquisa input");
  const iconeLupa = document.getElementById("lupa");

  function realizarBusca() {
    const termo = inputPesquisa.value.trim();

    if (termo !== "") {
      console.log("Home procurando por:", termo);
    }
  }

  iconeLupa.addEventListener("click", realizarBusca);

  inputPesquisa.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      realizarBusca();
    }
  });

  const cards = document.querySelectorAll(".card-ev");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const nomeEvento = card.querySelector(".titulo-card-ev").textContent;

      console.log("Redirecionando para o evento:", nomeEvento);
    });
  });

  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  const botaoLogin = document.getElementById("botao-login");

  const botaoRegistrar = document.getElementById("botao-registrar");

  const botaoSair = document.getElementById("botao-sair");

  if (usuarioLogado) {
    botaoLogin.style.display = "none";
    botaoRegistrar.style.display = "none";
    botaoSair.style.display = "inline-block";

    /* MOSTRAR EMAIL DO USUÁRIO */

    const divButtons = document.querySelector(".buttons");

    const nomeUsuario = document.createElement("div");

    nomeUsuario.classList.add("usuario-logado");

    nomeUsuario.innerHTML = `
        <i class="fas fa-user"></i>
        ${usuarioLogado.email}
    `;

    divButtons.prepend(nomeUsuario);
  }

  /* LOGOUT */

  botaoSair.addEventListener("click", () => {
    localStorage.removeItem("usuarioLogado");

    alert("Você saiu da conta!");

    window.location.reload();
  });
});
