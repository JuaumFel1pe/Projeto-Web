const params = new URLSearchParams(window.location.search);
const modo = params.get("modo");

const loginForm = document.getElementById("login-form");
const registroForm = document.getElementById("registro-form");

if (modo === "registro") {
  loginForm.style.display = "none";
  registroForm.style.display = "block";
} else {
  registroForm.style.display = "none";
  loginForm.style.display = "block";
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function registrar() {
  // O .trim() remove espaços em branco que o usuário possa ter digitado sem querer no início ou fim
  const email = document.getElementById("registro-email").value.trim();
  const senha = document.getElementById("registro-senha").value.trim();

  if (email === "" || senha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  // Verifica se o e-mail tem um formato válido
  if (!validarEmail(email)) {
    alert("Por favor, insira um e-mail válido (ex: seuemail@dominio.com).");
    return;
  }

  // Verifica se o usuário já existe para não sobrescrever
  if (localStorage.getItem(email)) {
    alert("Este e-mail já está registrado!");
    return;
  }

  const usuario = { email, senha };
  localStorage.setItem(email, JSON.stringify(usuario));

  alert("Usuário registrado com sucesso!");
  window.location.href = "login.html?modo=login";
}

function fazerLogin() {
  const email = document.getElementById("login-email").value.trim();
  const senha = document.getElementById("login-senha").value.trim();

  if (email === "" || senha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  // Verifica o formato do e-mail também no login
  if (!validarEmail(email)) {
    alert("Por favor, insira um e-mail válido (ex: seuemail@dominio.com).");
    return;
  }

  const usuarioSalvo = localStorage.getItem(email);

  if (!usuarioSalvo) {
    alert("Usuário não encontrado");
    return;
  }

  const usuario = JSON.parse(usuarioSalvo);

  if (usuario.senha === senha) {
    // SALVA O USUÁRIO LOGADO 
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    alert("Login realizado com sucesso!");

    if (localStorage.getItem("ingressoSelecionado")) {
      window.location.href = "../carrinho/carrinho.html"; // Caminho ajustado para a pasta do carrinho
    } else {
      window.location.href = "../home/home.html";
    }
  } else {
    alert("Senha incorreta");
  }
}