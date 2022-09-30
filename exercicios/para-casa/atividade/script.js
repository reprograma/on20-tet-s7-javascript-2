
let produtosNovos = [
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

let produtos = produtosNovos.map(criarLista)

let sectionPro = document.getElementById("section-produtos");

let btnProdutos = document.getElementById("btn-produtos");
btnProdutos.addEventListener("click", mostrarProdutos);

let btnInfo = document.getElementById("btn-info");
btnInfo.addEventListener("click", filtrarInfo);

let btnEletro = document.getElementById("btn-eletro");
btnEletro.addEventListener("click", filtrarEletro);

let btnAudio = document.getElementById("btn-audio");
btnAudio.addEventListener("click", filtrarAudio);


function criarLista(item) {

  let ul = document.getElementById("ul")
  let li = document.createElement("li")
  li.innerText = ` ${item.nome}\n\n R$${item.preco.toFixed(2)}`;
  ul.appendChild(li);
}
function mostrarProdutos() {
  ul.innerHTML = " "
  produtosNovos.map(criarLista)
}
function filtrarInfo() {
  let filtro = produtosNovos.filter((item) => item.categoria === "informática")
  ul.innerHTML = " "
  filtro.map(criarLista)
}
function filtrarEletro() {
  let filtro = produtosNovos.filter((item) => item.categoria === "eletrodomésticos")
  ul.innerHTML = " "
  filtro.map(criarLista)
}
function filtrarAudio() {
  let filtro = produtosNovos.filter((item) => item.categoria === "áudio e vídeo")
  ul.innerHTML = " "
  filtro.map(criarLista)
}












