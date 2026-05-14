const form = document.getElementById("form");

const lista = document.getElementById("lista");

let entradas =
  JSON.parse(localStorage.getItem("entradas"))
  || [];

function salvarLocalStorage() {
  localStorage.setItem(
    "entradas",
    JSON.stringify(entradas)
  );
}

function renderizarEntradas() {

  lista.innerHTML = "";

  entradas.forEach((entrada, index) => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
      <h3>${entrada.titulo}</h3>

      <p>${entrada.descricao}</p>

      <small>${entrada.data}</small>

      <button
        class="remover"
        onclick="removerEntrada(${index})"
      >
        Remover
      </button>
    `;

    lista.appendChild(card);

  });
}

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const titulo =
    document.getElementById("titulo").value;

  const descricao =
    document.getElementById("descricao").value;

  const data =
    document.getElementById("data").value;

  entradas.push({
    titulo,
    descricao,
    data
  });

  salvarLocalStorage();

  renderizarEntradas();

  form.reset();

});

function removerEntrada(index) {

  entradas.splice(index, 1);

  salvarLocalStorage();

  renderizarEntradas();

}

renderizarEntradas();

if ("serviceWorker" in navigator) {

  navigator.serviceWorker
    .register("service-worker.js");

}

let deferredPrompt;

const installBtn =
  document.getElementById("installBtn");

window.addEventListener(
  "beforeinstallprompt",
  (e) => {

    e.preventDefault();

    deferredPrompt = e;

    installBtn.hidden = false;

  }
);

installBtn.addEventListener(
  "click",
  async () => {

    if (deferredPrompt) {

      deferredPrompt.prompt();

      deferredPrompt = null;

      installBtn.hidden = true;

    }

  }
);