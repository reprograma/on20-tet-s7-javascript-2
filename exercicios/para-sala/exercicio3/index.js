let botaoMenu = document.querySelector('button')
let navbar = document.querySelector('nav')

function abrirfecharMenu() {
  navbar.classList.toogle ('ativo');
}

botaoMenu.addEventListener('click', abrirfecharMenu)
