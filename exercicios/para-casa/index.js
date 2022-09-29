const produtos = [
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
];

let categoria = "";
let preco = "";

const listaProdutos = document.querySelector("#lista-produtos");
listaProdutos.innerHTML = JSON.stringify(produtos, null, "\t");
const inputCategoria = document.querySelector("#selecionar-categoria");
const inputPreco = document.querySelector("#selecionar-preco");
inputCategoria.addEventListener("change", (event) => {
    categoria = event.target.value;
    mostrarLista();
});
inputPreco.addEventListener("change", (event) => {
    preco = event.target.value;
    mostrarLista();
});

const mostrarLista = () => {
    let produtosFiltrados = produtos.filter(produto => produto.categoria === categoria || categoria === "");
    if (preco === 'até 100 reais') {
        produtosFiltrados = produtosFiltrados.filter(produto => produto.preco <= 100);
    } else if (preco === 'de 101 a 500 reais') {
        produtosFiltrados = produtosFiltrados.filter(produto => produto.preco > 100 && produto.preco <= 500);
    } else if (preco === 'acima de 500 reais') {
        produtosFiltrados = produtosFiltrados.filter(produto => produto.preco > 500);
    }
    listaProdutos.innerHTML = JSON.stringify(produtosFiltrados, null, "\t");
};