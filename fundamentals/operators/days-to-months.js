/* Escribe un programa en JavaScript que solicite al usario ingresar el 
numero de dias calcule el numero equivalente de meses y dias restantes,
considerando que un mes consta de 30 dias.

Este programa utiliza el modulo prompt-sync para recibir interactivamente
la entrada del usuario. Despues de calcular la cantidad de meses y dias
segun la entrada, el programa muestra un mensjae al usuario indicando el equivalente
en meses y dias restantes.

Como pista, puedes usar Math.floor() para redondear el resultado a un numero entero.

Si el usuario ingresa 100, la salida sera: 100 days are 3 months and 10 days.
*/


const prompt = require('prompt-sync')()

const DAYS_PER_Month = 30

const days = parseInt(prompt('# of Days: '))

const months = Math.floor(days / DAYS_PER_Month)
const daysLeft = days % DAYS_PER_Month

console.log(`${days} days are ${months} months and ${daysLeft}`)
