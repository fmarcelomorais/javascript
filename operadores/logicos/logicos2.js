const t1 = true;
const t2 = true;

let comprarTV50 = t1 && t2;
let comprarTV32 = t1 !== t2;
let tomarSorvete = t1 || t2
let ficarEmCasa = !tomarSorvete
console.log('Vamos comprar a TV 50"?', comprarTV50) // AND
console.log('Vamos comprar a TV 32"?', comprarTV32) // XOR
console.log('Vamos Tomar Sorvete?',tomarSorvete) // OU
console.log('Vamos ficar em casa?', ficarEmCasa) // NOT
