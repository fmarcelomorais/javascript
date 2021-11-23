function falarDepoisde(segundo, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(frase)
        }, segundo * 1000)
    })
}

falarDepoisde(3, 'Que Legal!')
    .then(frase => frase.concat('###'))
    .then(outraFrase => console.log(outraFrase))
