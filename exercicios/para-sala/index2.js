let botaoMenu = document.querySelector('button');
let navbar = document.querySelector('nav');
botaoMenu.addEventListener('click', abrirMenu);
function abrirMenu(){
    document.getElementById('mensagem').innerHTML = "Bem-Vindo!";
}

