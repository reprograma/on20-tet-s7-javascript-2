let botaoMenu = document.querySelector('button')
let navbar = document.querySelector('nav')

function abrirMenu() {
  navbar.style.display = 'flex';
}

botaoMenu.addEventListener('click', abrirMenu)
