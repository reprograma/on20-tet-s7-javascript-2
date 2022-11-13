
let produtos = [ { nome: "TV 20 polegadas", categoria: "áudio e vídeo", preco: 1500 }, { nome: "Mouse", categoria: "informática", preco: 70 }, { nome: "Teclado", categoria: "informática", preco: 350 }, { nome: "Aparelho de som", categoria: "áudio e vídeo", preco: 600 }, { nome: "Sanduicheira", categoria: "eletrodomésticos", preco: 130 }, { nome: "Microondas 20L", categoria: "eletrodomésticos", preco: 800 }, { nome: "Geladeira frost free", categoria: "eletrodomésticos", preco: 2100 }, { nome: "Carregador de notebook Dell", categoria: "informática", preco: 140 }, { nome: "Caixa de som JBL", categoria: "áudio e vídeo", preco: 230 }, { nome: "Webcam", categoria: "informática", preco: 330 }, { nome: "Fogão 4 bocas", categoria: "eletrodomésticos", preco: 680 }, { nome: "Monitor 24 polegadas", categoria: "informática", preco: 900 }, { nome: "Air fryer", categoria: "eletrodomésticos", preco: 450 } ]

const filtro100 = produtos.filter(
(objeto)=>{return objeto.preco <=100}

)
console.log(filtro100)


const itensFiltrados1 = []

filtro100.forEach(function(produto){
    
      itensFiltrados1.push(produto.nome);

  }
  )

  console.log(itensFiltrados1)






const filtro101 = produtos.filter(
    (objeto)=>{return objeto.preco >=101 && objeto.preco< 501}
    
    )
    console.log(filtro101)

const itensFiltrados2 = []
filtro101.forEach(function(produto){
    
    itensFiltrados2.push(produto.nome);

}
)

console.log(itensFiltrados2)
   
const filtroAcima500 = produtos.filter(
        (objeto)=>{return objeto.preco >= 501}
        
        )
        console.log(filtroAcima500)

const itensFiltrados3 = []

filtroAcima500.forEach(function(produto){
    
    itensFiltrados3.push(produto.nome);

}
)

console.log(itensFiltrados3)

const botao1 = document.getElementById('abaixoDe100')
const botao2 = document.getElementById('entre100e500')
const botao3 = document.getElementById('acimaDe500')

const body = document.getElementById('body')
const div = document.createElement('section')


function mostrar1() {

div.innerHTML= itensFiltrados1
body.appendChild(div)


}

botao1.addEventListener('click', abrirFechar())
botao2.addEventListener('click', abrirFechar())
botao3.addEventListener('click', abrirFechar())

function abrirFechar() {
div.classlist.toggle("ativo")
}



function mostrar2() {
    div.innerHTML= itensFiltrados2
    body.appendChild(div)
    }

    function mostrar3() {

        div.innerHTML= itensFiltrados3
        body.appendChild(div)
        }