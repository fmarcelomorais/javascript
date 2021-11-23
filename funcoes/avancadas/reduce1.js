const alunos = [
    {nome: 'Marcelo', nota: 7.5, bolsista: true},
    {nome: 'Elisa', nota: 5.5, bolsista: false},
    {nome: 'Esther', nota: 6.5, bolsista: true},
    {nome: 'Elidiane', nota: 8.5, bolsista: false},
    {nome: 'Dom Wendell', nota: 4.5, bolsista: true},
]
console.log(alunos.map( a => a.nota))
const resultado = alunos.map( a => a.nota).reduce((acumulador, atual) =>{
    console.log(acumulador, atual)
    return acumulador + atual
},0)
console.log(resultado)