
const person = {name: 'Juanpa', age: 30}

const clone = JSON.parse(JSON.stringify(person))

console.log(clone)