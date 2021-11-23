// Valores Literais
// operadores +, *, -, /, %

const operacao = (operando1, operando2) =>{
    let soma = operando1 + operando2
    let subtracao = operando1 - operando2
    let multiplicacao = operando1 * operando2
    let divisao = operando1 / operando2
    let modulo = operando1 % operando2

    console.log(`${operando1} + ${operando2} = ${soma}`)
    console.log(`${operando1} - ${operando2} = ${subtracao}`)
    console.log(`${operando1} * ${operando2} = ${multiplicacao}`)
    console.log(`${operando1} / ${operando2} = ${divisao.toFixed(2)}`)
    console.log(`${operando1} % ${operando2} = ${modulo}`)
}   

operacao(5,10)