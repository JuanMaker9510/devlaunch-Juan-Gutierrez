/* Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes
en una escuela. Como parte de este desafio, primero configura el entorno para recibir
entradas del usuario, permitiendo que ingresen tres notas.

Luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presenatas el resultado formateado con maximo dos decimales, para asegurar una 
lectura clara.

Finalmente, presentas el resultado formateado con maximo dos decimales, para asegurar una 
lectura clara.

Si el usuario ingresa las calificaciones 80, 70 y 90, la salida sera:80
*/


const prompt = require('prompt-sync')()

const GRADE_AMOUNT = 3
const TOTAL_DIGITS = 2

const grade1 = parseFloat(prompt('Grade #1: '))
const grade2 = parseFloat(prompt('Grade #2: '))
const grade3 = parseFloat(prompt('Grade #3: '))

const average = (grade1 + grade2 + grade3) / GRADE_AMOUNT

console.log(`Final Grade: ${average.toFixed(TOTAL_DIGITS)}`)





