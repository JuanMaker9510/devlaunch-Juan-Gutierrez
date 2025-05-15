/* Un zoologico necesita un sistema para gestionar los animales y sus comportamientos.

Debes modelar un conjunto de clases que representen distintos tipos de animales y sus caracteristicas.

Todos los animales tienen un nombre, especie y edad. Ademas, todos deben poder emitir un sonido
y mostrar su informacion basica.

Algunos animales, como los leones, puedem rugir y tienen una melena. Los elefantes pueden hacer
sonar su trompa y tienen un tamano especifico (por ejemplo, 'pequeno', 'mediano' o 'grande').

Crea una clase base Animal con las propiedades y metodos necesarios.

Extender la clase base Animal para crear clases especificas como Leon y Elefante que tengan comportamientos
y propiedades particulares.

*/

class Animal{
    constructor(
        protected name: string,
        protected species: string,
        protected age: number
     ){
     this.name = name,
     this.species = species
     this.age = age
    }
    
    makeSound(){
      return ''
    }

    public toString(){
      return `Name: ${this.name}\n Species: ${this.species}\n Age: ${this.age}`
    }
}

class Lion extends Animal{
  constructor( name: string, species: string, age: number){
    super(name, species, age,)

  } 

  makeSound(): string {
    return'Roar...'
  }

  print(): string {
    const info = this.toString()

    return `🦁:\n ${info}`
  }

  
}

type ElephantSize = 'Small' | 'Medium' | 'Large'
class Elephant extends Animal{
  constructor( name: string, species: string, age: number, private size: ElephantSize){
    super(name, species, age,)
  }

    makeSound(): string {
    return'Trumpet Sound...'
  }

   print(): string {
    const info = this.toString()

    return `🐘:\n ${info}\n Size: ${this.size}`
  }
  
}


const l1 = new Lion ('Simba', 'Asiatic Lion', 8)
console.log(l1.makeSound())
console.log(l1.print())


const el1 = new Elephant ('Dumbo', 'African Elephant', 12, 'Medium')
console.log(el1.makeSound())
console.log(el1.print())
