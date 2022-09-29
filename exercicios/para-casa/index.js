let produtos = [
    {nome: "TV 20 polegadas",categoria: "áudio e vídeo", preco: 1500 },
    {nome: "Mouse", categoria: "informática", preco: 70 },
    {nome: "Teclado", categoria: "informática", preco: 350 },
    {nome: "Aparelho de som", categoria: "áudio e vídeo",  preco: 600  },
    {nome: "Sanduicheira",  categoria: "eletrodomésticos",  preco: 130 },
    {nome: "Microondas 20L", categoria: "eletrodomésticos",  preco: 800 },
    {nome: "Geladeira frost free",  categoria: "eletrodomésticos",  preco: 2100  },
    {nome: "Carregador de notebook Dell",  categoria: "informática", preco: 140  },
    {nome: "Caixa de som JBL", categoria: "áudio e vídeo",  preco: 230 },
    {nome: "Webcam", categoria: "informática", preco: 330  },
    {nome: "Fogão 4 bocas", nome: "Fogão 4 bocas",  preco: 680  },
    {nome: "Monitor 24 polegadas", categoria: "informática", preco: 900  },
    { nome: "Air fryer" , categoria: "eletrodomésticos", preco: 450} ,
  ]
 
  
let botaoEletrodomestico = document.querySelector("#botaoeletrodomestico")
let botaoInformatica = document.querySelector("#botaodeinformatica")
let botaoAudioevideo = document.querySelector("#botaodeaudioevideo") 
// console.log("botaoEletrodomestico")

  function filtrareletrodomestico(produto){
    console.log(produto)
    return produto.categoria == "eletrodomésticos"
  
  }

  function filtrarinformatica(produto){
    console.log(produto)
    return produto.categoria == "informática"
  
  }

  function filtraraudioevideo(produto){
    console.log(produto)
    return produto.categoria == "áudio e vídeo" 
  }
 
  function escrevereletrodomestico() {
    let listaeletrodomestico = produtos.filter (filtrareletrodomestico)
    escrevernatela (listaeletrodomestico)
    console.log(listaeletrodomestico)
  }

  function escreverinformatica() {
    let listainformatica = produtos.filter (filtrarinformatica)
    escrevernatela (listainformatica)
    console.log(listainformatica)
  }

  function escreveraudioevideo() {
    let listaaudioevideo = produtos.filter (filtraraudioevideo)
    escrevernatela (listaaudioevideo)
    console.log(listaaudioevideo)
  }

  // console.log(listaeletrodomestico)

  function escrevernatela (listafiltrada){
     let listaHTML = "";
    
     listafiltrada.forEach(linha => {
       listaHTML = listaHTML+linha.nome+" "+linha.categoria+" "+ linha.preco+"<br>";
     
       let quadrado = document.querySelector('#quadrado');
  quadrado.innerHTML = listaHTML;

     });
    
  }
// function alertar(){
  // alert("butao")
// }

  botaoEletrodomestico.addEventListener("click", escrevereletrodomestico)

  botaoInformatica.addEventListener("click", escreverinformatica)

  botaoAudioevideo.addEventListener("click", escreveraudioevideo)