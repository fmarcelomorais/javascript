const produto = {
    nome: 'iPad',
    preco: 5600,
    desconto: 0.15,

    valorComDesconto(){
        let valorTotal = this.preco * (1 - this.desconto)
        console.log(`Produto ${this.nome} - Valor R$ ${(valorTotal).toFixed(2)}`)
    }
}

console.log(produto.nome)
produto.valorComDesconto()


