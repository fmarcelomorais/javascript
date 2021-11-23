// Rest e Spred

const funcionario = { nome: 'Marcelo', salario: 1234.68}
const clone = { ativo: true, ...funcionario}

console.log(clone)

// spred com array

const grupoA = [1,2,3]
const grupoFinal = [4,5,6, ...grupoA, 7, 8,9]
console.log(grupoFinal)