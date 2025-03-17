/*

Escribe un programa sencillo de JavaScripts que calcule y muestre el indice de Masa Corporal (IMC)
de un usuario. El programa debe solicitar al usuario su nombre, altura en metros y peso en
Kilogramos.

Despues de calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya su nombre
y el valor de su IMC.

Calcula el IMC utilizando la formula:

IMC = Weight/ height^2

Nombre: John
Altura: 1.75
Peso: 70

La salida sera: Hi John, your BMI is ~22.86
*/

const prompt = require('prompt-sync')()

const EXPONENT_NUMBER = 2
const name =(prompt('User Name: '))
const height = parseFloat(prompt('Height: '))
const weight = parseFloat(prompt('Weight: '))

const imc = weight /Math.pow(height, EXPONENT_NUMBER)

console.log(`

 InBody

 Hi ${name}, your BMI is ~ ${imc.toFixed(2)}
   
 `)