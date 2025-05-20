/* 

Eres responsable de disenar un sistema sencillo de gestion de vehiculos para una empresa de transporte.

El sistema debe representar diferentes tipos de vehiculos y sus comportamientos utilizando una estructura de herencia de clases.

Todos los vehiculos tienen un emoji, marca, modelo y ano de fabricacion.

Los vehiculos deben poder arrancar y mostrar su informacion.

Los coches tienen un numero especifico de puertas y deben poder encender el aire acondicionado.

Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).

*/



class Vehicle{
  private isOn: boolean
    constructor(
      public brand: string, 
      public model: number | string, 
      protected fabricationYear: number,)
    {
      this.brand = brand
      this.model = model
      this.fabricationYear = fabricationYear
      this.isOn = false
    }

    run(){
      this.isOn = true
    }

  
  public toString(){ 
    return `Brand: ${this.brand}\n Model: ${this.model}\n Fabrication Year: ${this.fabricationYear}`}
}


type AmountOfDoors = 2 | 4
class Car extends Vehicle{
  private numberOfDoors: AmountOfDoors
  private isAirOn: boolean

  constructor(brand: string, model: number | string, fabricationYear: number, numberOfDoors: AmountOfDoors){
    super(brand, model, fabricationYear)
    this.numberOfDoors = numberOfDoors
    this.isAirOn = false
    
  }
  
  print(): string {
    const info = this.toString()
    return `🚗:\n ${info}\n Number of Doors: ${this.numberOfDoors}`
  }

}

type SideCar = 'yes' | 'no'
class Motorcycle extends Vehicle{
  private sideCar: SideCar
  
  constructor(brand: string, model: number | string, fabricationYear: number, sideCar: SideCar){
    super(brand, model, fabricationYear)
    this.sideCar = sideCar
    }
    
    wheelie(){
      return '🏍️💨🔥'
    }

    
    print(): string {
    const info = this.toString()
    return `🏍️:\n ${info}\n Do you want to add a side car: ${this.sideCar}}`
  }


}

const c1 = new Car ('Ford', 'RT89', 2010, 4)
const m1 = new Motorcycle ('Yamaha', 'Plus98', 2015, 'no')

console.log(c1.print())
console.log(m1.print())
console.log(m1.wheelie())