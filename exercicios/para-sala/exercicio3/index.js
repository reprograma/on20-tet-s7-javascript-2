let botaoMenu = document.querySelector('button')
let navbar = document.querySelector('nav')

// SOLUCAO 1
function abrirMenu() {
  if (navbar.style.display === 'none') {
    navbar.style.display = 'flex';
  } else {
    navbar.style.display = 'none'
  }
}

// SOLUCAO 2
function abrirFecharMenu() {
  navbar.classList.toggle('ativo');
}

botaoMenu.addEventListener('click', abrirFecharMenu)
