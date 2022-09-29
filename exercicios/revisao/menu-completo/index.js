let botaoMenu = document.querySelector('button')
let navbar = document.querySelector('nav')

function abrirFecharMenu() {
  navbar.classList.toggle('ativo');
  if (navbar.classList.contains('ativo')) {
    botaoMenu.firstElementChild.src = './close.webp'
  } else {
    botaoMenu.firstElementChild.src = './hamburger-menu-icon.webp'
  }
}

botaoMenu.addEventListener('click', abrirFecharMenu)
