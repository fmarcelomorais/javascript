Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}


const alunos = [
    {nome: 'Marcelo', nota: 7.5, bolsista: false},
    {nome: 'Elisa', nota: 5.5, bolsista: false},
    {nome: 'Esther', nota: 6.5, bolsista: false},
    {nome: 'Elidiane', nota: 8.5, bolsista: false},
    {nome: 'Dom Wendell', nota: 4.5, bolsista: true},
]
/* console.log(alunos.map( a => a.nota))
const resultado = alunos.map( a => a.nota).reduce((acumulador, atual) =>{
    console.log(acumulador, atual)
    return acumulador + atual
},0)
console.log(resultado) */

console.log('todos os alunos são bolsistas?')
const bolsistas = alunos.map(aluno => aluno.bolsista) 
const saoBolsistas = bolsistas.reduce((ac ,bolsista) => {
    return ac && bolsista
})

console.log(bolsistas)
console.log(saoBolsistas)

console.log('algum aluno é bolsistas?')

const algumBolsistas = bolsistas.reduce((ac ,bolsista) => {
    return ac || bolsista
})
console.log(bolsistas)
console.log(algumBolsistas)

const notas = alunos.map(n => n.nota)
const soma = (total, valor) => total + valor
const totalSoma = notas.reduce2(soma)
console.log(totalSoma)