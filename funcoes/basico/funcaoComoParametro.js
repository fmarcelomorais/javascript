function executar(func){
    if(typeof func === 'function'){
        console.log(func());
    }
}

function bomDia(){
    return 'bom dia'
}

executar(bomDia)
executar(bomDia)
