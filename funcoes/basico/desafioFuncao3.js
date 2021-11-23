// calcular media usando as 2 maiores notas
// aprovado >= 7
// recuperacao >=4 < 7
// reprovado < 4

function media(n1, n2, n3){
    let notas = [n1,n2,n3].sort((a,b) => a - b) // pode usar mim e max
    let notasMaoires = [notas[1], notas[2]]
    let media = notasMaoires.reduce((total, nota) =>{
        return  total + nota
    })
     return media / notasMaoires.length
    
}

console.log(media(5,1,7))