const itens = document.querySelectorAll('.destaque');

itens.forEach(item => {
  item.addEventListener('click', () => {
    
    if (item.classList.contains('ativo')) {
      item.classList.remove('ativo');
    } else {
    
      itens.forEach(el => el.classList.remove('ativo'));
      item.classList.add('ativo');
    }
  });
});

 const manchas = document.querySelectorAll('.mancha');

  manchas.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      } else {
        manchas.forEach(el => el.classList.remove('ativo'));
        item.classList.add('ativo');
      }
    });
  });




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
      botoes.forEach(b => {
        if (b.parentElement !== itemAtual) {
          b.parentElement.classList.remove('ativo');
        }
      });
      itemAtual.classList.toggle('ativo');
    });
  });

const promocoes = document.querySelectorAll('.promo01');
const emTelaPequena = window.innerWidth <= 768;

promocoes.forEach(item => {
  item.addEventListener('click', () => {
    if (emTelaPequena && item.classList.contains('sem-hover')) {

      item.classList.toggle('ativo');
    } else {
      if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      } else {
        promocoes.forEach(p => p.classList.remove('ativo'));
        item.classList.add('ativo');
      }
    }
  });
});

