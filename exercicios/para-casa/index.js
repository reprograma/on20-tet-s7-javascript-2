let produtos = [

    {nome: "TV 20 polegadas", categoria: "áudio e vídeo", preco: 1500},
    {nome: "Mouse", categoria: "informática", preco: 70},
    {nome: "Teclado", categoria: "informática", preco: 350},
    {nome: "Aparelho de som", categoria: "áudio e vídeo", preco: 600},
    {nome: "Sanduicheira", categoria: "eletrodomésticos", preco: 130},
    {nome: "Microondas 20L", categoria: "eletrodomésticos", preco: 800},
    {nome: "Geladeira frost free", categoria: "eletrodomésticos", preco: 2100},
    {nome: "Carregador de notebook Dell", categoria: "informática", preco: 140},
    {nome: "Caixa de som JBL", categoria: "áudio e vídeo", preco: 230},
    {nome: "Webcam", categoria: "informática", preco: 330},
    {nome: "Fogão 4 bocas", categoria: "eletrodomésticos", preco: 680},
    {nome: "Monitor 24 polegadas", categoria: "informática", preco: 900},
    {nome: "Air fryer", categoria: "eletrodomésticos", preco: 450}
    
  ]

  let informatica = document.querySelector('#informatica')
// console.log('informatica')

function filtroinformatica(produto) {
    console.log(produto)
    return produto.categoria == 'informática'
}

function escreverinformatica() {
    let listainformatica = produtos.filter(filtroinformatica)
    escrevernatela(listainformatica)
    console.log(listainformatica)
}

function escrevernatela(listafiltrada) {
    let listaHTML = '';
    listafiltrada.forEach(element => {
        listaHTML = listaHTML + element.nome + '' + element.categoria + '' + element.preco + '<br>'
    });

    let resultado = document.querySelector('#resultado')
    resultado.innerHTML=listaHTML;
}

let eletrodomesticos = document.querySelector('#eletrodomésticos')

function filtroeletrodomesticos(produto) {
    console.log(produto)
    return produto.categoria == 'eletrodomésticos'
}

function escrevereletrodomesticos() {
    let listaeletrodomesticos = produtos.filter(filtroeletrodomesticos)
    escrevernatela(listaeletrodomesticos)
    console.log(listaeletrodomesticos)
}

function escrevernatela(listafiltrada) {
    let listaHTML = '';
    listafiltrada.forEach(element => {
        listaHTML = listaHTML + element.nome + '' + element.categoria + '' + element.preco + '<br>'
    });

    let resultado = document.querySelector('#resultado')
    resultado.innerHTML=listaHTML;
}

let audioevideo = document.querySelector('#audioevideo')

function filtroaudiovideo(produto) {
    console.log(produto)
    return produto.categoria == 'áudio e vídeo'

}

function escreveraudiovideo() {
    let listaaudiovideo = produtos.filter(filtroaudiovideo)
    escrevernatela(listaaudiovideo)
    console.log(listaaudiovideo)
}

function escrevernatela(listafiltrada) {
    let listaHTML = '';
    listafiltrada.forEach(element => {
        listaHTML = listaHTML + element.nome + '' + element.categoria + '' + element.preco + '<br>'
    });

    let resultado = document.querySelector('#resultado')
    resultado.innerHTML=listaHTML;
}






// let informatica = document.querySelector('#informatica')
// // console.log('informatica')

// function filtroinformatica(produto) {
//     // console.log(produto)
//     return produto.categoria == 'informática'
// }

// function escreverinformatica() {
//     let listainformatica = produtos.filter(filtroInformatica)
//     escrevernatela(listaInformatica)
//     // console.log(listaInformatica)
    
// }

// function escrevernatela(listafiltrada) {
//     let listaHTML = '';
//     listafiltrada.forEach(element => {
//                 listaHTML = listaHTML + element.nome + '' + element.categoria + '' + element.preco + '<br>'       

//     });


// let resultado = document.querySelector('#resultado')
// resultado.innerHTML=listaHTML;

// }



// const menu = document.getElementsByTagName('menu');

// function toggleMenu() {
//     const header = document.getElementsByTagName('header');
//     header.classList.toggle('active');
// }

// menu.addEventListener('click', toggleMenu);






// let botaoMenu = document.querySelector('button')
// let navbar = document.querySelector('nav')

// function abrirMenu() {
    
//     if (navbar.style.display == 'flex') {
//         navbar.style.display = 'none'
//     } else {
//         navbar.style.display = 'flex'
//     }
// }

// botaoMenu.addEventListener('click', abrirMenu)