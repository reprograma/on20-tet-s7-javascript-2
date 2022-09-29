let produtos = [
    {
      nome: "TV 20 polegadas",
      categoria: "Áudio e Vídeo",
      preco: R$1500
    },
    {
      nome: "Mouse",
      categoria: "Informática",
      preco: R$70
    },
    {
      nome: "Teclado",
      categoria: "Informática",
      preco: R$350 
    },
    {
      nome: "Aparelho de som",
      categoria: "Áudio e Vídeo",
      preco: R$600
    },
    {
      nome: "Sanduicheira",
      categoria: "Eletrodomésticos",
      preco: R$130
    },
    {
      nome: "Microondas 20L",
      categoria: "Eletrodomésticos",
      preco: R$800
    },
    {
      nome: "Geladeira frost free",
      categoria: "Eletrodomésticos",
      preco: R$2100
    },
    {
      nome: "Carregador de notebook Dell",
      categoria: "Informática",
      preco: R$140
    },
    {
      nome: "Caixa de som JBL",
      categoria: "Áudio e Vídeo",
      preco: R$230
    },
    {
      nome: "Webcam",
      categoria: "Informática",
      preco: R$330
    },
    {
      nome: "Fogão 4 bocas",
      categoria: "Eletrodomésticos",
      preco: R$680
    },
    {
      nome: "Monitor 24 polegadas",
      categoria: "Informática",
      preco: R$900
    },
    {
      nome: "Air fryer",
      categoria: "Eletrodomésticos",
      preco: R$450
    }
  ]

// let infor = document.getElementById('infor')
// let audioVideo = document.getElementById('audioVideo')
// let eletro = document.getElementById('eletro')
let body = document.querySelector('body')
let lista = document.querySelector('ul')

function filtrarProduto(filtro) {

    for (let indice = 0; indice < produtos.length; indice++ ){
        if (filtro === produtos[indice].categoria){
            let li = document.createElement('li')
            //  nome
            let nome = document.createElement('strong')
            nome.innerHTML = produtos[indice].nome
            //  categoria
            let categoria = document.createElement('p')
            categoria.innerHTML = produtos[indice].categoria
            //  preço
            let preco = document.createElement('p')
            preco.innerHTML = produtos[indice].preco

            li.append(nome, categoria, preço)
            lista.appendChild(li)
        }
    }

}