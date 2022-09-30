/*

ALGORITMO

1 - escolher uma categoria;
2 - exibir os elementos apenas da categoria;

HTML

1 - criar um input de seleção por categoria;
2 - filtrar a array de acordo com a seleção;
3 - exibir os itens filtrados na página;


*/


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


let produtosFiltrados

function selectCategory(){

    let select = document.querySelector('#categoria')
    let optionValue = select.options[select.selectedIndex];
    console.log(optionValue)

    let valueList = optionValue.value;

    produtosFiltrados = produtos.filter(data =>
        data.categoria === valueList
    ).map(data => `<p>${data.nome}</p>`).join('')
    
    let resultado = document.getElementById('listar-produtos')
    resultado.innerHTML = produtosFiltrados

    console.log(produtosFiltrados)

}

selectCategory()