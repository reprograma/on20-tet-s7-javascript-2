let botaoMenu = document.querySelector('button')
let navbar = document.querySelector('nav')

function abrirMenu() {
    
    if (navbar.style.display == 'flex') {
        navbar.style.display = 'none'
    } else {
        navbar.style.display = 'flex'
    }
}

botaoMenu.addEventListener('click', abrirMenu)





//     navbar.style.display = 'flex';
// }

