Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
        return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Celular s10', preco: 1499, fragil: true},
    {nome: 'Teclado Gamer', preco: 499, fragil: false},
    {nome: 'Head-Set gamer', preco: 399, fragil: false},
    {nome: 'Monitor 30"', preco: 999, fragil: true},
]

const soPrecos = p => p.preco < 1000
const fragil = p => p.fragil == true

const precoMenorQueMil = produtos.filter2(soPrecos).filter2(fragil)
console.log(precoMenorQueMil)