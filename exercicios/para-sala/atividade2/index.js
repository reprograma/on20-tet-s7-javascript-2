
let botaoMenu = document.querySelector('button')
let navBar= document.querySelector ('nav')

function menuHamburger () {
    navBar.style.display='flex'
}

botaoMenu.addEventListener("click",menuHamburger)