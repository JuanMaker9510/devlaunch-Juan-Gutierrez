/*
Escribe un programa simple en JavaScript que evalue el valor de una variable llamada 'n'.
Verifica si el numero es positivo, negativo o cero, u muestra un mensaje coorespondiente
basado en la siguente evaluacion:

Si el numero es mayor que 0, imprime 'Positivo'.
Si el numero es menor que 0, imprime 'Negativo'.
Si el numero es exactamente 0, imprime 'Cero'.

Si la variable no es un numero, imprime un mensaje de error: ' Por favor, introduce un numero'.
*/

const prompt = require('prompt-sync')()

const NUMBER_TO_EVALUATE = 0


const n = parseInt(prompt('Introduce a Number: '))

if (n > NUMBER_TO_EVALUATE){
   console.log('Positive')
  } else if ( n < NUMBER_TO_EVALUATE){
    console.log ('Negative')
  } else if (n === NUMBER_TO_EVALUATE){
    console.log ('Cero')
  } else {
    console.log ('Please, introduce a number')
  }
