/*
El evento es parte de las Eliminatorias Sudamericanas para la Copa del Mundo.
En un partido celebrando el 22/11/23 a las 20:30, el equipo local Argentina
se enfrento al equipo visitante Brasil. El resultado final fue 1-0,
indicando a Argentina como el equipo ganador.
*/

const eventName = 'Eliminatorias Sudamericanas'

const day = 22
const month = 11
const  year = 23

const dayEvent = `${day}/${month}/${year}`



const hour = 20
const minutes = 30

const hourOfTheEvent = `${hour}:${minutes}`



const homeTeam = 'Argentina'
const awayTeam = 'Brasil'

const matchOfTheDay = `${homeTeam} v ${awayTeam}`



const argentinaScore = 1
const brasilScore = 0

const finalResult = `Argentina won ${argentinaScore}-${brasilScore} against Brasil`



console.log(`
  Tournament: ${eventName}\n
  Match Day: ${matchOfTheDay}\n
  Result: ${finalResult}\n
 `)