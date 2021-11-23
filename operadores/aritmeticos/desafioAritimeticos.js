const conversorTemperatura = (g, t) =>{ 
   //formula f -32 / 9 * C/5 
   let celcius = (g - 32 ) * (5/9)
   // formula c = (c * 9) / 5) + 32
   let fahrenheit = ((g * 9) / 5 ) + 32

    t == 'c' ? console.log(`${g}°F para Celcius: ${celcius.toFixed(1)}°C`) :
               console.log(`${g}°C para Fahrenheit: ${fahrenheit.toFixed(1)}°F`)
   

   return t
    
}

conversorTemperatura(32, 'c')