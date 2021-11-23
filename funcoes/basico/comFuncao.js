const data = (dia,mes,ano) =>{   
    console.log(`${ dia <= 9 ? '0'+dia : dia}/${mes <= 9 ? '0'+mes : mes}/${ano}`)   
}

data(4,9,1987)
data(14,10,1987)
data(23,12,2013)
data(1,1,2021)