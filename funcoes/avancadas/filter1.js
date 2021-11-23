const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Celular s10', preco: 1499, fragil: true},
    {nome: 'Teclado Gamer', preco: 499, fragil: false},
    {nome: 'Head-Set gamer', preco: 399, fragil: false},
    {nome: 'Monitor 30"', preco: 999, fragil: true},
]

const soPrecos = p => p.preco < 1000
const fragil = p => p.fragil == true

const precoMenorQueMil = produtos.filter(soPrecos).filter(fragil)
console.log(precoMenorQueMil)