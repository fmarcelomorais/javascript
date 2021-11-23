// PI * raio2
const areaCircuferencia = (raio) =>{
    const PI = Math.PI;
    let area = PI * raio * raio
    console.log(area.toFixed(2) + "m2")
}
let raio = 5;

areaCircuferencia(raio)