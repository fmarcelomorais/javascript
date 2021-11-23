const futuro = Date.now() + 2000;
let qtd = 0;
while(Date.now() < futuro){
   qtd++;
}

console.log(qtd)