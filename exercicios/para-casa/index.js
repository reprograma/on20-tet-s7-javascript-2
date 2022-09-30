/*- Explicação do exercício: Baseado na lista de produto abaixo, crie um programa que de acordo com o clique da pessoa ela possa filtrar os produtos. Isso significa que os produtos que devem aparecer são apenas os que correspondem ao filtro selecionado pelo usuário.
filtros: Informática, eletrodomésticos, áudio e vídeo (áudio e vídeo é uma categoria só)
extra: filtrar por preços: até 100 reais, de 101 a 500 reais e acima de 500 reais  */

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
//------------------------------------------------------------------------------

  //Criando uma lista no HTML com dos elementos do array produtos:
  let btnProdutos = document.getElementById("btn-produtos");
  btnProdutos.addEventListener("click",mostrarProdutos);

  let sectionProdutos = document.getElementById("section-produtos")

  let listaUl = document.createElement("ol"); 
 
  sectionProdutos.appendChild(listaUl);
  listaUl.appendChild(nomeLi);
  
  
  
  function mostrarProdutos(){

    //sectionPro.innerHTML = " "

    produtos.map((item) => {
      let nomeLi = document.createElement("li");
      //criando/atribuindo aos Li o texto, no caso será o valor da chave nome.
      //let nomeTexto = document.createTextNode(""); 
      nomeLi.innerText = ` ${item.nome}\n\nR$${item.preco.toFixed(2)}`;  
      listaUl.appendChild(nomeLi);

     
    })
  }
  
  //criando com FOR os Li para cada elemento do array produtos
 /* for (let i = 0; i < produtos.length; i++){

    let itensLi = document.createElement("li");
  //criando/atribuindo aos Li o texto, no caso será o valor da chave nome.
    let textoLi = document.createTextNode(produtos[i].nome);
    itensLi.appendChild(textoLi);
    listaUl.appendChild(itensLi);
  }*/
  // console.log(listaUl);


//---------------------------------------------------------------------------------------------------

  //TENTATIVA 1545154846

  //CATEGORIA INFORMÁTICA

  let botaoInfo = document.getElementById("btn-info");
  
  botaoInfo.addEventListener("click",filtrarInfo);

  let sectionPro = document.getElementById("section-produtos");
  

  function filtrarInfo() {

   let listaInfo = produtos.filter((produto) => produto.categoria ==="informática");

    sectionPro.innerHTML = " "
   
    listaInfo.map((item) => { 
      let paragrafo = document.createElement("p");
      paragrafo.innerText = `Produto: ${item.nome}\n Categoria: ${item.categoria}\n Preço: R$${item.preco.toFixed(2)}`; 

      sectionPro.appendChild(paragrafo);    
   })

   /*for (let i = 0; i < listaInfo.length; i++) {
     
     console.log(`Produto:${listaInfo[i].nome} e Categoria:${listaInfo[i].categoria}`);
     
     let paragrafo = document.createElement("p");
  
     
     paragrafo.innerText = `Produto: ${listaInfo[i].nome} \n Categoria: ${listaInfo[i].categoria} \n Preço: R$${listaInfo[i].preco},00`;       
     
       //let sectionPro = document.getElementById("section-produtos");
       sectionPro.appendChild(paragrafo);       
      }*/
  }  

  //CATEGORIA ELETRODOMÉTICOS

  let botaoEletro = document.getElementById("btn-eletro");
  
  botaoEletro.addEventListener("click",filtrarEletro);

  function filtrarEletro() {

   let listaEletro = produtos.filter((produto) => produto.categoria ==="eletrodomésticos");
   sectionPro.innerHTML = " "

   for (let i = 0; i < listaEletro.length; i++) { 

       //console.log(`Produto:${listaEletro[i].nome} e Categoria:${listaEletro[i].categoria}`);
       
       let paragrafo = document.createElement("p");
       paragrafo.innerText = `Produto: ${listaEletro[i].nome} \n Categoria: ${listaEletro[i].categoria} \n Preço: R$${listaEletro[i].preco},00`;       
       
      // let sectionPro = document.getElementById("section-produtos");
       sectionPro.appendChild(paragrafo);       
      }
  }  

  //CATEGORIA AUDIO E VIDEO

  let botaoAudio = document.getElementById("btn-audio");
  
  botaoAudio.addEventListener("click",filtrarAudio);

  function filtrarAudio() {

   let listaAudio = produtos.filter((produto) => produto.categoria === "áudio e vídeo");
   sectionPro.innerHTML = " "

   for (let i = 0; i < listaAudio.length; i++) {

       //console.log(`Produto:${listaEletro[i].nome} e Categoria:${listaEletro[i].categoria}`);
       
       let paragrafo = document.createElement("p");
       paragrafo.innerText = `Produto: ${listaAudio[i].nome} \n Categoria: ${listaAudio[i].categoria} \n Preço: R$${listaAudio[i].preco},00`;       
       
       //let sectionPro = document.getElementById("section-produtos");
       sectionPro.appendChild(paragrafo);       
      }
  }  


//---------------------------------------------------------------------------------------
   //TENTATIVA 1

//button q recebe o evento click para filtrar a categoria informática
  /*let botaoInfo = document.getElementById("btn-info");

  function filtrarInfo() {

    let listaInfo = produtos.filter((produto) => produto.categoria ==="informática");
    console.log(listaInfo);

    let lista = listaInfo.forEach(function(produto) {
      console.log( `resultado: ${produto.nome} - ${produto.preco}`    );
    })

    let criarParagrafo = document.createElement("p");
    criarParagrafo.innerHTML = `Produtos filtrados: ${produtos.nome}`;

    
    let sectionPro = document.getElementById("section-produtos");
    sectionPro.appendChild(criarParagrafo);
  }
  
  botaoInfo.addEventListener("click",filtrarInfo); */



//---------------------------------------------------------------------------------
  //TENTATIVA 2
   /* function filtroInfo (){
        for (let i = 0; i < produtos.length; i++) {
            botaoInfo.addEventListener("click",  function filtroInfo(){
                let listaInfo = produtos.filter((produto) => produto.categoria ==="informática");
                console.log(listaInfo);
               
              });
          }
        
    } */
    












 


