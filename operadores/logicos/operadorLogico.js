let temDinheiro = false;
let estaEnsolarado = false;
let carroEstaNaGaragem = true

let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = '#2 (OR) - vai pro shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU)

console.log(false != true)
console.log(true != true)

console.log(!true)
console.log(!false)