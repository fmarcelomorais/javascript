// Função com parametro e retorno
function somar(a, b){
    return a + b
}

//funcao com parametro e sem retorno
function exibir(a,b){
    console.log(a * b)
}

// funcao sem parametro e com retorno
function retornarDataAtual(){
    return new Date().toLocaleDateString()
}

// funcao sem parametro e sem retorno
function horaAtual(){
    console.log(new Date().getHours())
}

console.log(somar(10,20))
exibir(10, 20)
console.log(retornarDataAtual())
horaAtual()