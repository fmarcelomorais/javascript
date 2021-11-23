Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Carderno", "preco": 10.45 }',
    '{"nome": "Lapis", "preco": 1.45 }',
    '{"nome": "Mochila", "preco": 53.50 }',
    '{"nome": "Estojo Canetas", "preco": 23.99 }',
]

// retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)
const precos = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(precos)
console.log(resultado)

