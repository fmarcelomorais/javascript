const maiorMenorIgual = (v1, v2) =>{
    let maior = v1 > v2 ? 'Maior': 'Menor'
    //let menor = v1 > v2 ? 'Menor': 'Maior'
    let maiorIgual = v1 >= v2 ? 'Maior Igual': 'Menor Igual'
    //let menorIgual = v1 <= v2 ? 'Maior': 'Menor'
    let igual = v1 == v2 ? ' Igual' : 'Diferente' 

    
    console.log(`${v1} e ${maior} que ${v2}`)
    console.log(`${v1} e ${maiorIgual} a ${v2}`)
    console.log(`${v1} e ${igual} a ${v2}`)
   
}

maiorMenorIgual(6,8)