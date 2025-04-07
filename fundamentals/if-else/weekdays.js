/*
El programa solicita al usuario  un numero del 1 al 7 mediante prompt-sync.
Utiliza una declaracion switch para mostrar el dia de la semana correspondiente o
"Invalid day" si el numero no es valido. Ejemplo: 3 muestra "Wednesday",
8 muestra "Invalid day". Ideal para identificar dias en programas simples.
*/

const prompt = require('prompt-sync')()


const days = parseInt(prompt('Insert a Number from 1 to 7 : '))


switch(days){
    case 1:
        console.log('Monday')
     break;
    case 2:
        console.log('Tuesday')
    case 3:
        console.log('Wednesday')
     break;
    case 4:
        console.log('Thursday')
     break;
     case 5:
        console.log('Friday')
     break;
    case 6:
        console.log('Saturday')
     break;
    case 7:
        console.log('Sunday')
     break;
    default:
        console.error('Invalid Number')




}