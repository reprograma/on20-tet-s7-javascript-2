let informatica = document.querySelector('#informatica')
// console.log('informatica')

function filtroInformatica(produto) {
    console.log(produto)
    return produto.categoria === 'informática'
}

function escreverInformatica() {
    let listainformatica = produtos.filter(filtroinformatica)
    escreverNaTela(listainformatica)
    console.log(listainformatica)
    
}

function escreverNaTela(listafiltrada) {
    let listaHTML = '';
    listafiltrada.array.forEach(element => {
        let resultado = document.querySelector('#resultado')
        listaHTML = listaHTML + linha.nome + '' + linha.categoria + '' + linha.preco + '<br>'
    });
}
