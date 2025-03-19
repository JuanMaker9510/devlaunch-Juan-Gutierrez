/*

El programa solicita al usaurio su edad con prompt-sync, la convierte a numero y
utiliza el ternary operator para clasificar:

0-2 años: "You are a baby".
3-13 años: "You are a child".
14-17 años: "You are a teenager".
18-29 años: "You are a young adult".
30-60 años: "You are an adult".
Mas de 60 años: "You are an eldery".

Si la edad es menor de 5, muestra: "The institution does not support your age, pleas try again."
Es una forma clara y util de categorizar por edades.

*/

const prompt = require('prompt-sync')()


const age = parseInt(prompt('How old are you? '))

const message = (
 (age >= 0) && (age <= 2)
  ?'You are a baby'
  :(age >= 3) && (age <= 13)
    ?'You are a child'
    : (age >= 14) && (age <= 17)
     ? 'You ara a teenager'
     :(age >= 18) && (age <= 29)
      ? 'You are a young adult'
      :(age >= 30) && (age <= 60)
       ? 'You are an adult'
       :(age > 60)
        ? 'You are an adult'
        : null
)

console.log(message ? message : 'The institution does not support your age, pleas try again.')