let botaoMenu = document.querySelector("button")
let navabar = document.querySelector("nav")

function abrirMenu() {
    navabar.style.display = "flex"

}

function abrirFecharMenu(){
    navabar.classList.toggle("ativo")
}

botaoMenu.addEventListener('click', abrirFecharMenu)