const a = 10;
const b = 28;
const operacao = '-'; // + - * / %

let resultdo = 0;
    if(operacao == '+'){
        resultdo = a + b
    }else if(operacao == '-'){
        resultdo = a - b
    }else if(operacao == '*'){
        resultdo = a * b
    }else if(operacao == '/'){
        let Vresultdo = a / b     
        resultdo = Vresultdo.toFixed(2)  
    }else {
        resultdo = a % b
    }

console.log(resultdo)