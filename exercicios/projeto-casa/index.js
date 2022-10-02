let produtos = [

    { nome: "TV 20 polegadas", categoria: "áudio e vídeo", preco: 1500 },
    { nome: "Mouse", categoria: "informática", preco: 70 },
    { nome: "Teclado", categoria: "informática", preco: 350 },
    { nome: "Aparelho de som", categoria: "áudio e vídeo", preco: 600 },
    { nome: "Sanduicheira", categoria: "eletrodomésticos", preco: 130 },
    { nome: "Microondas 20L", categoria: "eletrodomésticos", preco: 800 },
    { nome: "Geladeira frost free", categoria: "eletrodomésticos", preco: 2100 },
    { nome: "Carregador de notebook Dell", categoria: "informática", preco: 140 },
    { nome: "Caixa de som JBL", categoria: "áudio e vídeo", preco: 230 },
    { nome: "Webcam", categoria: "informática", preco: 330 },
    { nome: "Fogão 4 bocas", categoria: "eletrodomésticos", preco: 680 },
    { nome: "Monitor 24 polegadas", categoria: "informática", preco: 900 },
    { nome: "Air fryer", categoria: "eletrodomésticos", preco: 450 }

];

let buttons = document.querySelectorAll ('button');


function productList (productList) {
    let section = document.querySelector('section');
    let existingList = document.querySelectorAll('.produto');

    if (existingList.length> 0) {
        existingList.forEach(function (itemExistingList){
        section.removeChild(itemExistingList);
        })
    }

    productList.forEach(function (e){
        let p = document.createElement('p');
        p.classList.add('produto');
        p.innerText = `Produto: ${e.nome}`;
        section.appendChild(p);
    })
}


function productsFilter (evento) {
    let filteredProducts = [];
    filteredProducts = produtos.filter(function(product) {
        return product.categoria === evento.target.innerText;
    });
    productList(filteredProducts);
}


for (let button of buttons){
    button.addEventListener('click', productsFilter);
}
