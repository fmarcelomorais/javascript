const valores = [1,2,3,4,5,]

let x2 = x => x * 2 // funcao arow
let x3 = x => x * 3 // funcao arow
let x10 = x => x * 10 // funcao arow

const valoresDobro = valores.map(x2)
const valoresTriplo = valoresDobro.map(x3)
const valores10x = valoresTriplo.map(x10)

console.log(valoresDobro)
console.log(valoresTriplo)
console.log(valores10x)

const encadeado = valores.map(x2).map(x3).map(x10)
console.log(encadeado)