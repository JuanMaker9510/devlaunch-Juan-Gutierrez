/*

En una empresa hay proceso donde cada trabajador debe registrar las horas de entrada y 
salida diariamente. De esta forma, al final de cada dia, su empleador sabra cuanto
tiene que pagarles por sus horas de trabajo.
Pero, si una persona trabajo mas de ocho horas, se le debe pagar un costo extra por
las horas adicionales, que es igual a 1.5 veces el monto de su tarifa por hora.
Haz un progorama que, recibiendo la tarifa por hora, la hora de entrada y la hora de salida,
imprima el monto total de dinero que ese empleado recibio ese dia.

Tarifa por hora: $10
Hora de entrada: 9:00
Hora de salida: 18:00

Respuesta: $95

*/



const prompt = require('prompt-sync')()

const WORK_DAY_HOURS = 8
const EXTRA_HOURS_MULTIPLIER = 1.5


const calculateSalary = ( hourlyRate, startTime, endTime) => {
    const [startHour] = startTime.split(':')
    const [endHour] = endTime.split(':')

    const workedHours = endHour - startHour

    let salary = 0

    if (workedHours <= WORK_DAY_HOURS){
        salary = hourlyRate * workedHours
    } else {
        const extraHours = workedHours - WORK_DAY_HOURS
        salary = (hourlyRate * WORK_DAY_HOURS) + ((extraHours * hourlyRate) * EXTRA_HOURS_MULTIPLIER) 
    }

    return salary

    

}

const main = () => { 
    const hourlyRate = parseFloat(prompt('Houry Rate $: '))
    const startTime = (prompt('Start at: '))
    const endTime = (prompt('End at: '))
    
    const salary = calculateSalary(hourlyRate, startTime, endTime)

    console.log(`salary: $${salary}`)
}

main()