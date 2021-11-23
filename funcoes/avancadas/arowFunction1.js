let dobro = function (a) {
    return a * 2
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implicito

console.log(dobro(10))

let ola = function () { return 'ola' }
ola = () => 'ola'
ola = _ => 'ola' // quando não há parametros pode usar _
console.log(ola())