/* let linha = '';

for(let i = 1; i <= 6; i++){
    console.log(linha += '#')
}

for(let s = '#'; s != '#######'; s += '#'){
    console.log(s)
} */

for(let c = '*'; c != '******'; c += '*'){
    let linha = '';
    for(let l = '*'; l != '******'; l += '*'){
       linha += `${c}${l}`;
    }
    console.log(linha);

}