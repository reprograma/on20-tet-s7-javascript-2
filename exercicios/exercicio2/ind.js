let botaoMenu = document.querySelector("button")
let navabar = document.querySelector("nav")

function abrirMenu() {
    navabar.style.display = "flex"

}

botaoMenu.addEventListener('click', abrirMenu)