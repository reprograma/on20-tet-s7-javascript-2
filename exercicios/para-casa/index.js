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
//   tentativa n.?;
//   criar evento onclick de um dos botões;
//   criar uma constante que crie um array com os elementos indicados pelo botão pressionado;
//   criar uma modificação de html/css para mostrar os elementos desse novo array no html;
//   lembrar de apagar o que está no campo de demonstração do array antes de exibir possível novo array;

// não sei a ordem que devo fazer... não sei como linkar o evento ao button e o conteúdo do button ao array;
// claramente não entendi .map direito, nem função. 

// por que textContent não funciona aqui? aliás, aqui eu tinha desistido já de fazer tudo junto bonitinho.
let botaoInformatica = document.getElementsByClassName('informática')
let botaoEletrodomésticos = document.textContent('eletrodomésticos')
let botaoAudioeVideo = document.textContent('áudio e vídeo')

botaoInformatica.addEventListener('click', botaoSelecionado)

function botaoSelecionado() {
    produtosInformática = produtos.map(produtos.categoria = evento.target)
    return produtos.nome
}
