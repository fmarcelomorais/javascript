let nota = 5;

switch(Math.ceil(nota)){
    case 10: 
    case 9: 
    case 8: 
    case 7: 
        console.log('parabens')
        break;
    case 6:
    case 5:   
        console.log('recuperação')
        break; 
    case 4:
    case 3:   
        console.log('Reprovado')
        break; 
    default: console.log('nota invalida')    
}