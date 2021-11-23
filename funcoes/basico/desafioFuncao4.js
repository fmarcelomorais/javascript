function executar(func, n1 = 0, n2 = 0){
   return func(n1, n2)
}

function somar(a,b){
    return a + b
}

console.log(executar(somar, 10, 30 ))

