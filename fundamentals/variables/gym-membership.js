/* El Elite Fitness Center es un gimnasio boutique ubicado en Palo Alto, California,
que ofrece membresias por $150 al mes.
Opera de 6AM a 10PM, emplea a 10 entrenadores certificados
y cuenta con comodidades como sauna, piscina y clases grupales.
*/

const gymName = 'Elite Fitness Center'

const gymType = 'boutique Gym'

const city = 'Palo Alto'
const state = 'California'
const location = `${city}, ${state}`

const membership = 150
const membershipTotal = `$ ${membership} per month.` 

const openHour = 6
const closeHour = 10
const schedule = `${openHour}:00AM - ${closeHour}:00PM`

const numberOfEmployees = 10
const professionalsHired = 'Certificated Coaches'

const amenity1 = 'Sauna'
const amenity2 = 'Pool'
const amenity3 = 'Classes'
const amenities = `${amenity1} - ${amenity2} - ${amenity3}`


console.log (`
  Gym Name = ${gymName} (${gymType})\n
   Location = ${location}\n
   Membership = ${membershipTotal}\n
   Schedule = ${schedule}\n
   Activities = ${amenities}
  
   `)
