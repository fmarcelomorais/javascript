const notas = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10]
notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(`notas Baixas: ${(notasBaixas).join( ' - ')} `)

// Usando Callback
const notaMenorQue7 = nota => nota < 7 // funcao arow
const notaMaiorQue7 = nota => nota >= 7 // funcao arow

const notasAltas = notas.filter(notaMaiorQue7)
const notasBaixas2 = notas.filter(notaMenorQue7)

console.log(`notas Baixas: ${(notasBaixas2).join( ' - ')} `)
console.log(`notas Altas: ${(notasAltas).join( ' - ')} `)
