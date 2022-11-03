let produtos = [
  {
    nome: "TV 20 polegadas",
    categoria: "áudio e vídeo",
    preco: 1500
  },
  {
    nome: "Mouse",
    categoria: "informática",
    preco: 70
  },
  {
    nome: "Teclado",
    categoria: "informática",
    preco: 350
  },
  {
    nome: "Aparelho de som",
    categoria: "áudio e vídeo",
    preco: 600
  },
  {
    nome: "Sanduicheira",
    categoria: "eletrodomésticos",
    preco: 130
  },
  {
    nome: "Microondas 20L",
    categoria: "eletrodomésticos",
    preco: 800
  },
  {
    nome: "Geladeira frost free",
    categoria: "eletrodomésticos",
    preco: 2100
  },
  {
    nome: "Carregador de notebook Dell",
    categoria: "informática",
    preco: 140
  },
  {
    nome: "Caixa de som JBL",
    categoria: "áudio e vídeo",
    preco: 230
  },
  {
    nome: "Webcam",
    categoria: "informática",
    preco: 330
  },
  {
    nome: "Fogão 4 bocas",
    categoria: "eletrodomésticos",
    preco: 680
  },
  {
    nome: "Monitor 24 polegadas",
    categoria: "informática",
    preco: 900
  },
  {
    nome: "Air fryer",
    categoria: "eletrodomésticos",
    preco: 450
  }
]


let btnInformatica = document.getElementById("informatica");
let btnEletros = document.getElementById("eletros");
let btnAV = document.getElementById("aV");



function listarProdutos(listaProdutos) {
  let section = document.querySelector('section')
  let listaExistente = document.querySelectorAll('.produto')
  if (listaExistente.length > 0) {
    listaExistente.forEach(function (itemListaExistente) {
      section.removeChild(itemListaExistente);
    })
  }

  listaProdutos.forEach(function (listaPorCategoria) {
    let p = document.createElement('p');
    p.classList.add('produto')
    p.innerText = `Produto: ${listaPorCategoria.nome},Valor>R$ ${listaPorCategoria.preco}`;
    section.appendChild(p);
  })
}

function filtrarProdutos(evento) {
  let produtosFiltrados = [];
  produtosFiltrados = produtos.filter(function (produto) {
    return produto.categoria === evento.target.innerText;
  });
  listarProdutos(produtosFiltrados);
}

btnInformatica.addEventListener('click', filtrarProdutos);
btnEletros.addEventListener('click', filtrarProdutos);
btnAV.addEventListener('click', filtrarProdutos);