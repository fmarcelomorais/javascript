function somar1(a, b){
   return a + b;
}

console.log(somar1(5, 4));

function somar2(a){
    return function(b){
        return a + b;
    }
}

console.log(somar2(1)(2))