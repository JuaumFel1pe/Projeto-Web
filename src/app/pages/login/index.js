const params = new URLSearchParams(window.location.search);

const modo = params.get("modo");

const loginForm = document.getElementById("login-form");
const registroForm = document.getElementById("registro-form");

/* MOSTRAR FORM CERTO */

if (modo === "registro") {
  loginForm.style.display = "none";
} else {
  registroForm.style.display = "none";
}

/* REGISTRAR */

function registrar() {
  const email = document.getElementById("registro-email").value;

  const senha = document.getElementById("registro-senha").value;

  if (email === "" || senha === "") {
    alert("Preencha todos os campos");

    return;
  }

  const usuario = {
    email: email,
    senha: senha,
  };

  localStorage.setItem(email, JSON.stringify(usuario));

  alert("Usuário registrado!");

  window.location.href = "login.html?modo=login";
}

/* LOGIN */

function fazerLogin() {
  const email = document.getElementById("login-email").value;

  const senha = document.getElementById("login-senha").value;

  const usuarioSalvo = localStorage.getItem(email);

  if (!usuarioSalvo) {
    alert("Usuário não encontrado");

    return;
  }

  const usuario = JSON.parse(usuarioSalvo);

  if (usuario.senha === senha) {
    alert("Login realizado!");

    localStorage.setItem("usuarioLogado", email);

    window.location.href = "../home/home.html";
  } else {
    alert("Senha incorreta");
  }
}
