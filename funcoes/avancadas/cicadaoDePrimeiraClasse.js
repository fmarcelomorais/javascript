// Função em JS é First-Class Object(Citizens)
//Hiper-Order function

//Forma literal

function nomeDaFuncao(){}

// Armazenar em variavel ou constante
const nomeDaFuncao2 = function(){}

// Armazenar em Array

const array = [function(a,b){ return a+ b}, nomeDaFuncao(), nomeDaFuncao2]

// Armazenar em atributo de Objeto
const obj = {}
obj.falar = function (){console.log('Estou falando')}

// Passar Funcao como parametros
function executar(funcao){
    funcao()
}

// Retornar ou conter funcao

function somar(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

somar(1,2)(5)
