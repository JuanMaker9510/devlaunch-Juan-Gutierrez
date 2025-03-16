/* Crea un programa en JavaScript que calcule la factura total de una persona en un hotel,
donde cada habitacion tiene un precio de $100 por noche, aprovechando una oferta promocional
que incluye un descuento del 5%.

El programa debe de solicitar al huesped el numero de noches que paso en el hotel para calcular
la facura final.

Si el usuario ingresa que se quedo 5 noches, la salida sera: $475.00
*/


const prompt = require('prompt-sync')()

const PRICE_PER_NIGHT = 100

const promoDiscount= 0.05

 const days = parseInt(prompt('How many days would you like to stay?: '))
 

 const subtotal = PRICE_PER_NIGHT * days
 const discount = subtotal * promoDiscount
 const total = subtotal - discount


console.log(`

    Hotel Recipe
 -------------------   
 Payment\n
   -Nights # = ${days}
   -Subtotal = $${subtotal}
   -Discount = $${discount}
   -Total = $${total}



    
  `)
