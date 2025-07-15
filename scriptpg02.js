/* Carrossel*/
const imagens = document.querySelectorAll(".carrosel-img");
const container = document.querySelector(".carrosel-track");
let index = 0;

function passarSlide() {
  index++;
  if (index >= imagens.length) index = 0;

  const largura = imagens[0].clientWidth;
  container.style.transform = `translateX(-${index * largura}px)`;
}

setInterval(passarSlide, 3500);
/*fechamento carrosse*/
const botaoFiltro = document.getElementById("botaoFiltro");
const menuFiltro = document.getElementById("menuFiltro");

botaoFiltro?.addEventListener("click", (event) => {
  event.preventDefault();
  menuFiltro.classList.toggle("ativo");
});

const botoesFiltro = document.querySelectorAll("#menuFiltro [data-filtro]");
const lista = document.querySelector(".lista-produtos");
let itens = Array.from(lista.querySelectorAll("li"));

botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    const filtro = botao.getAttribute("data-filtro");

    if (filtro === "az" || filtro === "za") {
      ordenarItens(filtro);
    } else {
      itens.forEach(item => {
        const categoria = item.getAttribute("data-categoria");
        item.style.display = categoria === filtro ? "block" : "none";
      });
    }

    menuFiltro.classList.remove("ativo");
  });
});

function ordenarItens(tipo) {
  let ordenados = [...itens];

  ordenados.sort((a, b) => {
    const textoA = a.querySelector("h2").textContent.trim().toLowerCase();
    const textoB = b.querySelector("h2").textContent.trim().toLowerCase();
    return tipo === "az"
      ? textoA.localeCompare(textoB)
      : textoB.localeCompare(textoA);
  });

  lista.innerHTML = "";
  ordenados.forEach(item => {
    item.style.display = "block";
    lista.appendChild(item);
  });

  itens = ordenados;
}
const inputBusca = document.getElementById("cx01");
const formBusca = document.querySelector(".caixa-busca");

formBusca.addEventListener("submit", function (e) {
  e.preventDefault(); // evita o recarregamento da página

  const termo = inputBusca.value.trim().toLowerCase(); // texto digitado pelo usuário

  if (termo === "") {
    // se estiver vazio, mostra todos
    itens.forEach(item => item.style.display = "block");
    return;
  }

  itens.forEach(item => {
    const titulo = item.querySelector("h2").textContent.toLowerCase();
    if (titulo.includes(termo)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  menuFiltro.classList.remove("ativo"); // fecha o menu, se estiver aberto
});
document.addEventListener('DOMContentLoaded', () => {
  const itensLista = document.querySelectorAll('.lista-produtos li');

  itensLista.forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('activo');
      
      // Remove de todos
      itensLista.forEach(i => i.classList.remove('activo'));
      
      // Se não estava ativo, ativa só o clicado
      if (!isActive) {
        item.classList.add('activo');
      }
    });
  });
});
