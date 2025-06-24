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

const botoes = document.querySelectorAll('.faq-pergunta');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const itemAtual = botao.parentElement;

      // fecha todos exceto o clicado
      botoes.forEach(b => {
        if (b.parentElement !== itemAtual) {
          b.parentElement.classList.remove('ativo');
        }
      });

      // alterna o clicado
      itemAtual.classList.toggle('ativo');
    });
  });

  const promocoes = document.querySelectorAll('.promo01');

promocoes.forEach(item => {
  item.addEventListener('click', () => {
    promocoes.forEach(p => p.classList.remove('ativo')); // remove de todos
    item.classList.add('ativo'); // adiciona ao clicado
  });
});